<template>
    <div
        class="layout-navbars-tagsview"
        :class="{ 'layout-navbars-tagsview-shadow': themeConfig.layout === 'classic' }"
    >
        <el-scrollbar ref="scrollbarRef" @wheel.prevent="onHandleScroll">
            <ul ref="tagsUlRef" class="layout-navbars-tagsview-ul" :class="setTagsStyle">
                <li
                    v-for="(v, k) in state.tagsViewList"
                    v-show="!v.meta.isViewRouter"
                    :key="k"
                    :ref="
                        (el) => {
                            if (el) tagsRefs[k] = el;
                        }
                    "
                    class="layout-navbars-tagsview-ul-li"
                    :class="{ 'is-active': isActive(v.path) }"
                    :data-name="v.name"
                    @click="onTagsClick(v, k)"
                    @contextmenu.prevent="onContextmenu(v, $event)"
                >
                    <SvgIcon
                        v-if="isActive(v.path)"
                        class="iconfont icon-webicon318 layout-navbars-tagsview-ul-li-iconfont font14"
                        :name="v.meta.icon"
                    />

                    <SvgIcon
                        v-if="!isActive(v.path) && themeConfig.isTagsviewIcon"
                        class="layout-navbars-tagsview-ul-li-iconfont"
                        :name="v.meta.icon"
                    />
                    <span>{{ v.meta.title }}</span>
                    <template v-if="isActive(v.path)">
                        <el-icon class="ml5" @click.stop="refreshCurrentTagsView(v.path)">
                            <ele-RefreshRight />
                        </el-icon>
                        <el-icon
                            v-if="!v.meta.isAffix"
                            class="layout-navbars-tagsview-ul-li-icon layout-icon-active"
                            @click.stop="closeCurrentTagsView(v.path)"
                        >
                            <ele-Close />
                        </el-icon>
                    </template>

                    <el-icon
                        v-if="!v.meta.isAffix"
                        class="layout-navbars-tagsview-ul-li-icon layout-icon-three"
                        @click.stop="closeCurrentTagsView(v.path)"
                    >
                        <ele-Close />
                    </el-icon>
                </li>
            </ul>
        </el-scrollbar>
        <Contextmenu
            ref="contextmenuRef"
            :dropdown="state.dropdown"
            @current-contextmenu-click="onCurrentContextmenuClick"
        />
    </div>
</template>

<script setup>
    import pinia from '@store';
    import { useGlobal, useThemeConfig } from '@store';
    import { onBeforeRouteUpdate } from 'vue-router';
    import screenfull from 'screenfull';
    import { setSession, getSession, removeSession } from '@utils/storage';
    import Sortable from 'sortablejs';
    import Contextmenu from './contextmenu.vue';

    const { proxy } = getCurrentInstance();
    const tagsRefs = ref([]);
    const scrollbarRef = ref();
    const contextmenuRef = ref();
    const tagsUlRef = ref();

    const route = useRoute();
    const router = useRouter();
    const state = reactive({
        routePath: route.path,
        dropdown: { x: '', y: '' },
        tagsRefsIndex: 0,
        tagsViewList: [],
        sortable: '',
        tagsViewRoutesList: [],
    });

    // 获取布局配置信息
    const { themeConfig } = storeToRefs(useThemeConfig());

    // 动态设置 tagsView 风格样式
    const setTagsStyle = computed(() => {
        return themeConfig.value.tagsStyle;
    });

    // 存储 tagsViewList 到浏览器临时缓存中，页面刷新时，保留记录
    const addBrowserSetSession = (tagsViewList) => {
        setSession('tagsViewList', tagsViewList);
    };
    // 获取 vuex 中的 tagsViewRoutes 列表
    const getTagsViewRoutes = () => {
        state.routePath = route.path;
        state.tagsViewList = [];
        if (!themeConfig.value.isCacheTagsView) removeSession('tagsViewList');
        state.tagsViewRoutesList = useGlobal().tagsViewRoutes;
        initTagsView();
    };
    // vuex 中获取路由信息：如果是设置了固定的（isAffix），进行初始化显示
    const initTagsView = () => {
        if (getSession('tagsViewList') && themeConfig.value.isCacheTagsView) {
            state.tagsViewList = getSession('tagsViewList');
        } else {
            state.tagsViewRoutesList.map((v) => {
                if (v.meta.isAffix && !v.meta.isHide) {
                    state.tagsViewList.push({ ...v });
                }
            });
            addTagsView(route.path);
        }

        // 初始化当前元素(li)的下标
        getTagsRefsIndex(route.path);
        // 添加初始化横向滚动条移动到对应位置
        tagsViewmoveToCurrentTag();
    };
    // 1、添加 tagsView：未设置隐藏（isHide）也添加到在 tagsView 中
    const addTagsView = (path, to) => {
        //如果已经存在了就跳过
        if (state.tagsViewList.some((v) => v.path === path)) return false;
        //如果是非页面路由则跳过
        if (to && to.meta && to.meta.isViewRouter) return false;
        //找到满足条件的第一个
        const item = state.tagsViewRoutesList.find((v) => v.path === path);
        if (!item || (item.meta.isLink && !item.meta.isIframe)) return false;
        item.query = to && to.query ? to.query : route.query;
        //如果没有一个固定。则默认第一个固定
        if (state.tagsViewList.length === 0) item.meta.isAffix = true;
        state.tagsViewList.push({ ...item });

        addBrowserSetSession(state.tagsViewList);
    };
    // 2、刷新当前 tagsView：
    const refreshCurrentTagsView = (path) => {
        proxy.mittBus.emit('onTagsViewRefreshRouterView', path);
    };
    // 3、关闭当前 tagsView：如果是设置了固定的（isAffix），不可以关闭
    const closeCurrentTagsView = (path) => {
        state.tagsViewList.map((v, k, arr) => {
            if (!v.meta.isAffix) {
                if (v.path === path) {
                    state.tagsViewList.splice(k, 1);
                    setTimeout(() => {
                        // 最后一个
                        if (state.tagsViewList.length === k)
                            router.push({ path: arr[arr.length - 1].path, query: arr[arr.length - 1].query });
                        // 否则，跳转到下一个
                        else router.push({ path: arr[k].path, query: arr[k].query });
                    }, 0);
                }
            }
        });
        addBrowserSetSession(state.tagsViewList);
    };
    // 4、关闭其它 tagsView：如果是设置了固定的（isAffix），不进行关闭
    const closeOtherTagsView = (path) => {
        state.tagsViewList = [];
        state.tagsViewRoutesList.map((v) => {
            if (v.meta.isAffix && !v.meta.isHide) state.tagsViewList.push({ ...v });
        });
        addTagsView(path);
    };
    // 5、关闭全部 tagsView：如果是设置了固定的（isAffix），不进行关闭
    const closeAllTagsView = (path) => {
        state.tagsViewList = [];
        state.tagsViewRoutesList.map((v) => {
            if (v.meta.isAffix && !v.meta.isHide) {
                state.tagsViewList.push({ ...v });
                if (state.tagsViewList.some((v) => v.path === path)) router.push({ path, query: route.query });
                else router.push({ path: v.path, query: route.query });
            }
        });
        addBrowserSetSession(state.tagsViewList);
    };
    // 6、开启当前页面全屏
    const openCurrenFullscreen = (path) => {
        const item = state.tagsViewList.find((v) => v.path === path);
        nextTick(() => {
            router.push({ path, query: item.query });
            const element = document.querySelector('.layout-main');
            const screenfulls = screenfull;
            screenfulls.request(element);
        });
    };

    // 当前项右键菜单点击
    const onCurrentContextmenuClick = (data) => {
        let { id, path } = data;
        let currentTag = state.tagsViewList.find((v) => v.path === path);
        switch (id) {
            case 0:
                refreshCurrentTagsView(path);
                router.push({ path, query: currentTag.query });
                break;
            case 1:
                closeCurrentTagsView(path);
                break;
            case 2:
                router.push({ path, query: currentTag.query });
                closeOtherTagsView(path);
                break;
            case 3:
                closeAllTagsView(path);
                break;
            case 4:
                openCurrenFullscreen(path);
                break;
        }
    };
    // 判断页面高亮
    const isActive = (path) => {
        return path === state.routePath;
    };
    // 右键点击时：传 x,y 坐标值到子组件中（props）
    const onContextmenu = (v, e) => {
        const { clientX, clientY } = e;
        state.dropdown.x = clientX;
        state.dropdown.y = clientY;
        contextmenuRef.value.openContextmenu(v);
    };
    // 当前的 tagsView 项点击时
    const onTagsClick = (v, k) => {
        state.routePath = v.path;
        state.tagsRefsIndex = k;
        router.push(v);
    };
    // 更新滚动条显示
    const updateScrollbar = () => {
        proxy.$refs.scrollbarRef.update();
    };
    // 鼠标滚轮滚动
    const onHandleScroll = (e) => {
        proxy.$refs.scrollbarRef.wrapRef.scrollLeft += e.wheelDelta / 4;
    };
    // tagsView 横向滚动
    const tagsViewmoveToCurrentTag = () => {
        nextTick(() => {
            if (tagsRefs.value.length <= 0) return false;
            // 当前 li 元素
            let liDom = tagsRefs.value[state.tagsRefsIndex];
            // 当前 li 元素下标
            let liIndex = state.tagsRefsIndex;
            // 当前 ul 下 li 元素总长度
            let liLength = tagsRefs.value.length;
            // 最前 li
            let liFirst = tagsRefs.value[0];
            // 最后 li
            let liLast = tagsRefs.value[tagsRefs.value.length - 1];
            // 当前滚动条的值
            let scrollRefs = proxy.$refs.scrollbarRef.wrapRef;
            // 当前滚动条滚动宽度
            let scrollS = scrollRefs.scrollWidth;
            // 当前滚动条偏移宽度
            let offsetW = scrollRefs.offsetWidth;
            // 当前滚动条偏移距离
            let scrollL = scrollRefs.scrollLeft;
            // 上一个 tags li dom
            let liPrevTag = tagsRefs.value[state.tagsRefsIndex - 1];
            // 下一个 tags li dom
            let liNextTag = tagsRefs.value[state.tagsRefsIndex + 1];
            // 上一个 tags li dom 的偏移距离
            let beforePrevL = '';
            // 下一个 tags li dom 的偏移距离
            let afterNextL = '';
            if (liDom === liFirst) {
                // 头部
                scrollRefs.scrollLeft = 0;
            } else if (liDom === liLast) {
                // 尾部
                scrollRefs.scrollLeft = scrollS - offsetW;
            } else {
                // 非头/尾部
                if (liIndex === 0) beforePrevL = liFirst.offsetLeft - 5;
                else beforePrevL = liPrevTag ? liPrevTag.offsetLeft - 5 : -5;
                if (liIndex === liLength) afterNextL = liLast.offsetLeft + liLast.offsetWidth + 5;
                else afterNextL = liNextTag.offsetLeft + liNextTag.offsetWidth + 5;
                if (afterNextL > scrollL + offsetW) {
                    scrollRefs.scrollLeft = afterNextL - offsetW;
                } else if (beforePrevL < scrollL) {
                    scrollRefs.scrollLeft = beforePrevL;
                }
            }
            // 更新滚动条，防止不出现
            updateScrollbar();
        });
    };
    // 获取 tagsView 的下标：用于处理 tagsView 点击时的横向滚动
    const getTagsRefsIndex = (path) => {
        if (state.tagsViewList.length > 0) {
            state.tagsRefsIndex = state.tagsViewList.findIndex((item) => item.path === path);
        }
    };
    // 设置 tagsView 可以进行拖拽
    const initSortable = () => {
        const el = document.querySelector('.layout-navbars-tagsview-ul');
        if (!el) return false;
        if (!themeConfig.value.isSortableTagsView) state.sortable && state.sortable.destroy();
        if (themeConfig.value.isSortableTagsView) {
            state.sortable = Sortable.create(el, {
                animation: 300,
                dataIdAttr: 'data-name',
                onEnd: () => {
                    const sortEndList = [];
                    state.sortable.toArray().map((val) => {
                        state.tagsViewList.map((v) => {
                            if (v.name === val) sortEndList.push({ ...v });
                        });
                    });
                    addBrowserSetSession(sortEndList);
                },
            });
        }
    };
    // 监听路由的变化，动态赋值给 tagsView
    watch(pinia.state, (val) => {
        if (val.global.tagsViewRoutes.length === state.tagsViewRoutesList.length) return false;
        getTagsViewRoutes();
    });
    // 页面加载前
    onBeforeMount(() => {
        // 监听非本页面调用 0 刷新当前，1 关闭当前，2 关闭其它，3 关闭全部 4 当前页全屏
        proxy.mittBus.on('onCurrentContextmenuClick', (data) => {
            onCurrentContextmenuClick(data);
        });
        // 监听布局配置界面开启/关闭拖拽
        proxy.mittBus.on('openOrCloseSortable', () => {
            initSortable();
        });
    });
    // 页面卸载时
    onUnmounted(() => {
        // 取消非本页面调用监听
        proxy.mittBus.off('onCurrentContextmenuClick');
        // 取消监听布局配置界面开启/关闭拖拽
        proxy.mittBus.off('openOrCloseSortable');
    });
    // 页面更新时
    onBeforeUpdate(() => {
        tagsRefs.value = [];
    });
    // 页面加载时
    onMounted(() => {
        // 初始化 vuex 中的 tagsViewRoutes 列表
        getTagsViewRoutes();
        initSortable();
    });
    // 路由更新时
    onBeforeRouteUpdate((to) => {
        state.routePath = to.path;
        addTagsView(to.path, to);
        getTagsRefsIndex(to.path);
        tagsViewmoveToCurrentTag();
    });
</script>

<style scoped lang="scss">
    .layout-navbars-tagsview {
        flex: 1;
        background-color: #ffffff;
        border-bottom: 1px solid #f1f2f3;
        :deep(.el-scrollbar__wrap) {
            overflow-x: auto !important;
        }
        &-ul {
            list-style: none;
            margin: 0;
            padding: 0;
            height: 34px;
            display: flex;
            align-items: center;
            color: #606266;
            font-size: 12px;
            white-space: nowrap;
            padding: 0 15px;
            &-li {
                height: 26px;
                line-height: 26px;
                display: flex;
                align-items: center;
                border: 1px solid #e6e6e6;
                padding: 0 15px;
                margin-right: 5px;
                border-radius: 2px;
                position: relative;
                z-index: 0;
                cursor: pointer;
                justify-content: space-between;
                &:hover {
                    background-color: var(--color-primary-light-9);
                    color: var(--color-primary);
                    border-color: var(--color-primary-light-6);
                }
                &-iconfont {
                    position: relative;
                    left: -5px;
                    font-size: 12px;
                }
                &-icon {
                    border-radius: 100%;
                    position: relative;
                    height: 14px;
                    width: 14px;
                    text-align: center;
                    line-height: 14px;
                    right: -5px;
                    &:hover {
                        color: #fff;
                        background-color: var(--color-primary-light-3);
                    }
                }
                .layout-icon-active {
                    display: block;
                }
                .layout-icon-three {
                    display: none;
                }
            }
            .is-active {
                color: #ffffff;
                background: var(--color-primary);
                border-color: var(--color-primary);
            }
        }
    }
    .layout-navbars-tagsview-shadow {
        box-shadow: rgb(0 21 41 / 4%) 0px 1px 4px;
    }
</style>
