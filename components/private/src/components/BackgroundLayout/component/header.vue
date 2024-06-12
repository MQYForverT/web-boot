<template>
    <el-header class="layout-header" :height="setHeaderHeight">
        <NavBarsIndex />
    </el-header>
</template>

<script setup>
    import NavBarsIndex from '../navBars/index.vue';
    import { useThemeConfig } from '@store';
    // 设置 header 的高度
    const setHeaderHeight = computed(() => {
        let { isTagsview, layout } = useThemeConfig().themeConfig;
        if (isTagsview && layout !== 'classic') return '84px';
        else return '50px';
    });
</script>
