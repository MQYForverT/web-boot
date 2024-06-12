<template>
    <div
        v-loading="state.iframeLoading"
        class="layout-view-bg-white flex"
        :style="{ height: `calc(100vh - ${state.iframeHeight}`, border: 'none' }"
    >
        <iframe
            v-show="!state.iframeLoading"
            id="iframe"
            frameborder="0"
            height="100%"
            :src="state.iframeUrl"
            width="100%"
        ></iframe>
    </div>
</template>

<script setup>
    import { useThemeConfig } from '@store';

    const route = useRoute();
    const state = reactive({
        iframeLoading: true,
        iframeUrl: '',
        iframeHeight: '',
    });
    // 初始化页面加载 loading
    const initIframeLoad = () => {
        state.iframeUrl = route.meta.isLink;
        nextTick(() => {
            state.iframeLoading = true;
            const iframe = document.getElementById('iframe');
            if (!iframe) return false;
            iframe.onload = () => {
                state.iframeLoading = false;
            };
        });
    };
    // 设置 iframe 的高度
    const initIframeHeight = () => {
        let { isTagsview } = useThemeConfig();
        if (isTagsview) return (state.iframeHeight = '84px');
        else return (state.iframeHeight = '20px');
    };
    // 页面加载时
    onMounted(() => {
        initIframeLoad();
        initIframeHeight();
    });
    // 监听路由变化，多个 iframe 时使用
    watch(
        () => route.path,
        () => {
            initIframeLoad();
        }
    );
</script>
