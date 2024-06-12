<template>
    <el-main class="layout-main">
        <el-scrollbar
            ref="layoutScrollbarRef"
            class="layout-scrollbar"
            :style="{
                minHeight: `calc(100vh - ${state.headerHeight}`,
                padding: state.currentRouteMeta.isLink && state.currentRouteMeta.isIframe ? 0 : '',
                transition: 'padding 0.3s ease-in-out',
            }"
        >
            <div class="white pa10 flex-center" style="min-height: calc(100vh - 104px); justify-content: space-between">
                <LayoutParentView />

                <Footer v-if="themeConfig.isFooter" />
            </div>
        </el-scrollbar>
    </el-main>
</template>

<script setup>
    import LayoutParentView from '../routerView/parent.vue';
    import Footer from './footer.vue';
    import { useThemeConfig } from '@store';

    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const state = reactive({
        headerHeight: '',
        currentRouteMeta: {},
    });
    // 获取布局配置信息
    const { themeConfig } = storeToRefs(useThemeConfig());
    // 设置 main 的高度
    const initHeaderHeight = () => {
        let { isTagsview } = themeConfig.value;
        if (isTagsview) return (state.headerHeight = '84px');
        else return (state.headerHeight = '50px');
    };
    // 初始化获取当前路由 meta，用于设置 iframes padding
    const initGetMeta = () => {
        state.currentRouteMeta = route.meta;
    };
    // 页面加载前
    onBeforeMount(() => {
        initGetMeta();
        initHeaderHeight();
    });
    // 监听 themeConfig 配置文件的变化，更新菜单 el-scrollbar 的高度
    watch(themeConfig.value, () => {
        proxy.$refs.layoutScrollbarRef.update();
    });
    // 监听路由的变化
    watch(
        () => route.path,
        () => {
            proxy.$refs.layoutScrollbarRef.wrapRef.scrollTop = 0;
        }
    );
</script>
