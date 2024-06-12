<template>
    <div v-if="setShowLogo" class="layout-logo" @click="onThemeConfigChange">
        <img class="layout-logo-medium-img" src="/favicon.ico" />
        <span class="fontFFF">{{ themeConfig.globalTitle }}</span>
    </div>
    <div v-else class="layout-logo-size" @click="onThemeConfigChange">
        <img class="layout-logo-size-img" src="/favicon.ico" />
    </div>
</template>

<script setup>
    import { useThemeConfig } from '@store';
    const { proxy } = getCurrentInstance();

    // 获取布局配置信息
    const { themeConfig } = storeToRefs(useThemeConfig());
    // 设置 logo 的显示。classic 经典布局默认显示 logo
    const setShowLogo = computed(() => {
        let { isCollapse, layout } = themeConfig.value;
        return !isCollapse || layout === 'classic' || document.body.clientWidth < 1000;
    });
    // logo 点击实现菜单展开/收起
    const onThemeConfigChange = () => {
        proxy.mittBus.emit('onMenuClick');
        themeConfig.value.isCollapse = !themeConfig.value.isCollapse;
    };
</script>

<style scoped lang="scss">
    .layout-logo {
        width: 220px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgb(0 21 41 / 10%) 0px 1px 4px;
        color: var(--color-primary);
        font-size: 16px;
        cursor: pointer;
        animation: logoAnimation 0.3s ease-in-out;
        &:hover {
            span {
                color: var(--color-primary-light-2);
            }
        }
        &-medium-img {
            width: 35px;
            margin-right: 10px;
        }
    }
    .layout-logo-size {
        width: 100%;
        height: 50px;
        display: flex;
        cursor: pointer;
        animation: logoAnimation 0.3s ease-in-out;
        &-img {
            width: 30px;
            margin: auto;
        }
        &:hover {
            img {
                animation: logoAnimation 0.3s ease-in-out;
            }
        }
    }
</style>
