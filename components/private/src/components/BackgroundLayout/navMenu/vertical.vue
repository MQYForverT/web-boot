<template>
    <el-menu
        background-color="transparent"
        :collapse="setIsCollapse"
        :collapse-transition="false"
        :default-active="state.defaultActive"
        :default-openeds="getAllOpenList"
        router
        :unique-opened="themeConfig.isUniqueOpened"
    >
        <template v-for="val in menuLists">
            <el-sub-menu v-if="val.children && val.children.length > 0" :key="val.path" :index="val.path">
                <template #title v-if="val.meta.isMenu && !val.meta.isViewRouter">
                    <SvgIcon :name="val.meta.icon" />
                    <span>{{ val.meta.title }}</span>
                </template>
                <SubItem :chil="val.children" />
            </el-sub-menu>
            <el-menu-item v-else-if="val.meta.isMenu && !val.meta.isViewRouter" :key="val.path + 1" :index="val.path">
                <SvgIcon :name="val.meta.icon" />
                <template #title v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)">
                    <span>{{ val.meta.title }}</span>
                </template>
                <template #title v-else>
                    <a :href="val.meta.isLink" target="_blank">{{ val.meta.title }}</a>
                </template>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script setup>
    import { useThemeConfig, useGlobal } from '@store';
    import { onBeforeRouteUpdate } from 'vue-router';
    import SubItem from './subItem.vue';

    const props = defineProps({
        menuList: {
            type: Array,
            default: () => [],
        },
    });

    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const state = reactive({
        defaultActive: route.path,
    });

    // 获取父级菜单数据
    const menuLists = computed(() => {
        return props.menuList;
    });
    // 获取布局配置信息
    const { themeConfig } = storeToRefs(useThemeConfig());

    // 设置菜单的收起/展开
    const setIsCollapse = computed(() => {
        return document.body.clientWidth < 1000 ? false : themeConfig.value.isCollapse;
    });
    // 设置默认全部展开的菜单
    const getAllOpenList = computed(() => {
        return themeConfig.value.isAllOpen ? useGlobal().routesList.map((x) => x.path) : [];
    });
    // 路由更新时
    onBeforeRouteUpdate((to) => {
        state.defaultActive = to.path;
        proxy.mittBus.emit('onMenuClick');
        const clientWidth = document.body.clientWidth;
        if (clientWidth < 1000) themeConfig.value.isCollapse = false;
    });
</script>
