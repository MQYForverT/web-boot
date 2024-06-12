<template>
    <div class="layout-navbars-breadcrumb-index">
        <Logo v-if="setIsShowLogo" />
        <Breadcrumb />
        <User />
    </div>
</template>

<script setup>
    import User from './user.vue';
    import Breadcrumb from './breadcrumb.vue';
    import Logo from '@layout/component/logo.vue';
    import pinia from '@store';
    import { useGlobal, useThemeConfig } from '@store';

    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const state = reactive({
        menuList: [],
    });
    // 获取布局配置信息
    const { themeConfig } = storeToRefs(useThemeConfig());
    const { routesList } = storeToRefs(useGlobal());
    // 设置 logo 显示/隐藏
    const setIsShowLogo = computed(() => {
        let { isShowLogo, layout } = themeConfig.value;
        return isShowLogo && layout === 'classic';
    });
    // 设置/过滤路由（非静态路由/是否显示在菜单中）
    const setFilterRoutes = () => {
        let { layout, isClassicSplitMenu } = themeConfig.value;
        if (layout === 'classic' && isClassicSplitMenu) {
            state.menuList = delClassicChildren(filterRoutesFun(routesList.value));
            const resData = setSendClassicChildren(route.path);
            proxy.mittBus.emit('setSendClassicChildren', resData);
        } else {
            state.menuList = filterRoutesFun(routesList.value);
        }
    };
    // 设置了分割菜单时，删除底下 children
    const delClassicChildren = (arr) => {
        arr.map((v) => {
            if (v.children) delete v.children;
        });
        return arr;
    };
    // 路由过滤递归函数
    const filterRoutesFun = (arr) => {
        return arr
            .filter((item) => !item.meta.isHide)
            .map((item) => {
                item = Object.assign({}, item);
                if (item.children) item.children = filterRoutesFun(item.children);
                return item;
            });
    };
    // 传送当前子级数据到菜单中
    const setSendClassicChildren = (path) => {
        const currentPathSplit = path.split('/');
        let currentData = {};
        filterRoutesFun(routesList.value).map((v, k) => {
            if (v.path === `/${currentPathSplit[1]}`) {
                v['k'] = k;
                currentData['item'] = [{ ...v }];
                currentData['children'] = [{ ...v }];
                if (v.children) currentData['children'] = v.children;
            }
        });
        return currentData;
    };
    // 监听路由的变化，动态赋值给菜单中
    watch(pinia.state, (val) => {
        if (val.global.routesList.length === state.menuList.length) return false;
        setFilterRoutes();
    });
    // 页面加载时
    onMounted(() => {
        setFilterRoutes();
        proxy.mittBus.on('getBreadcrumbIndexSetFilterRoutes', () => {
            setFilterRoutes();
        });
    });
    // 页面卸载时
    onUnmounted(() => {
        proxy.mittBus.off('getBreadcrumbIndexSetFilterRoutes');
    });

    defineExpose({
        themeConfig,
        setIsShowLogo,
        ...toRefs(state),
    });
</script>

<style scoped lang="scss">
    .layout-navbars-breadcrumb-index {
        height: 50px;
        display: flex;
        align-items: center;
        padding-right: 15px;
        background: var(--bg-topBar);
        overflow: hidden;
        border-bottom: 1px solid #f1f2f3;
    }
</style>
