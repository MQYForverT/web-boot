<template>
    <div v-if="isShow">
        <div v-show="state.isDelayFooter" class="layout-footer mt30 mb20">
            <div class="layout-footer-warp">
                <div>© {{ new Date().getFullYear() }} {{ themeConfig.footerCompany }} ❤️</div>
                <div class="mt5">{{ themeConfig.footerRecord }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useThemeConfig } from '@store';
    import { onBeforeRouteUpdate } from 'vue-router';
    const route = useRoute();

    const state = reactive({
        isDelayFooter: true,
    });

    const isShow = computed(() => {
        let { meta } = route;
        return meta.isShowFotter;
    });

    const { themeConfig } = storeToRefs(useThemeConfig());
    // 路由改变时，等主界面动画加载完毕再显示 footer
    onBeforeRouteUpdate(() => {
        state.isDelayFooter = false;
        setTimeout(() => {
            state.isDelayFooter = true;
        }, 800);
    });
</script>

<style scoped lang="scss">
    .layout-footer {
        width: 100%;
        &-warp {
            margin: auto;
            color: #9e9e9e;
            text-align: center;
            animation: logoAnimation 0.3s ease-in-out;
        }
    }
</style>
