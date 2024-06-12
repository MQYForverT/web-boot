<template>
    <div v-show="themeConfig.isBreadcrumb" class="layout-navbars-breadcrumb">
        <SvgIcon
            class="layout-navbars-breadcrumb-icon"
            :name="themeConfig.isCollapse ? 'ele-Expand' : 'ele-Fold'"
            :size="16"
            @click="onThemeConfigChange"
        />
        <el-breadcrumb class="layout-navbars-breadcrumb-hide">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="(v, k) in state.breadcrumbList" v-show="!v.meta.isViewRouter" :key="v.name">
                    <span v-if="k === state.breadcrumbList.length - 1" class="layout-navbars-breadcrumb-span">
                        <SvgIcon
                            v-if="themeConfig.isBreadcrumbIcon"
                            class="layout-navbars-breadcrumb-iconfont"
                            :name="v.meta.icon"
                        />
                        {{ v.meta.title }}
                    </span>
                    <a v-else @click.prevent="onBreadcrumbClick(v)">
                        <SvgIcon
                            v-if="themeConfig.isBreadcrumbIcon"
                            class="layout-navbars-breadcrumb-iconfont"
                            :name="v.meta.icon"
                        />
                        {{ v.meta.title }}
                    </a>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>

<script setup>
    import { useGlobal, useThemeConfig } from '@store';
    import { onBeforeRouteUpdate } from 'vue-router';
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
        breadcrumbList: [],
        routeSplit: [],
        routeSplitFirst: '',
        routeSplitIndex: 1,
    });
    // 获取布局配置信息
    const { themeConfig } = storeToRefs(useThemeConfig());
    const { routesList } = storeToRefs(useGlobal());
    // 面包屑点击时
    const onBreadcrumbClick = (v) => {
        const { redirect, path } = v;
        if (redirect) router.push(redirect);
        else router.push(path);
    };
    // 展开/收起左侧菜单点击
    const onThemeConfigChange = () => {
        proxy.mittBus.emit('onMenuClick');
        themeConfig.value.isCollapse = !themeConfig.value.isCollapse;
    };
    // 处理面包屑数据
    const getBreadcrumbList = (arr) => {
        arr.map((item) => {
            state.routeSplit.map((v, k, arrs) => {
                if (state.routeSplitFirst === item.path) {
                    state.routeSplitFirst += `/${arrs[state.routeSplitIndex]}`;
                    state.breadcrumbList.push(item);
                    state.routeSplitIndex++;
                    if (item.children) getBreadcrumbList(item.children);
                }
            });
        });
    };
    // 当前路由字符串切割成数组，并删除第一项空内容
    const initRouteSplit = (path) => {
        if (!themeConfig.value.isBreadcrumb) return false;
        state.breadcrumbList = [routesList.value[0]];
        state.routeSplit = path.split('/');
        state.routeSplit.shift();
        state.routeSplitFirst = `/${state.routeSplit[0]}`;
        state.routeSplitIndex = 1;
        getBreadcrumbList(routesList.value);
    };
    // 页面加载时
    onMounted(() => {
        initRouteSplit(route.path);
    });
    // 路由更新时
    onBeforeRouteUpdate((to) => {
        initRouteSplit(to.path);
    });
</script>

<style scoped lang="scss">
    .layout-navbars-breadcrumb {
        flex: 1;
        height: inherit;
        display: flex;
        align-items: center;
        padding-left: 15px;
        .layout-navbars-breadcrumb-icon {
            cursor: pointer;
            font-size: 18px;
            margin-right: 15px;
            color: var(--bg-topBarColor);
        }
        .layout-navbars-breadcrumb-span {
            opacity: 0.7;
            color: var(--bg-topBarColor);
        }
        .layout-navbars-breadcrumb-iconfont {
            font-size: 14px;
            margin-right: 5px;
        }
        :deep(.el-breadcrumb__separator) {
            opacity: 0.7;
            color: var(--bg-topBarColor);
        }
    }
</style>
