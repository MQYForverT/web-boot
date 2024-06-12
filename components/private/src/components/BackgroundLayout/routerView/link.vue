<template>
    <div class="layout-view-bg-white flex layout-view-link" :style="{ height: `calc(100vh - ${state.linkHeight}` }">
        <a class="flex-margin" href="https://element-plus.gitee.io/#/zh-CN/component/installation" target="_blank">
            {{ state.currentRouteMeta.title }}：{{ state.currentRouteMeta.isLink }}
        </a>
    </div>
</template>

<script setup>
    import { useThemeConfig } from '@store';

    const route = useRoute();
    const state = reactive({
        currentRouteMeta: {},
        linkHeight: '',
    });
    // 初始化获取当前路由 meta
    const initGetMeta = () => {
        state.currentRouteMeta = route.meta;
    };
    // 设置 iframe 的高度
    const initLinkHeight = () => {
        let { isTagsview } = useThemeConfig();
        if (isTagsview) return (state.linkHeight = '114px');
        else return (state.linkHeight = '50px');
    };
    // 页面加载时
    onMounted(() => {
        initGetMeta();
        initLinkHeight();
    });
</script>
