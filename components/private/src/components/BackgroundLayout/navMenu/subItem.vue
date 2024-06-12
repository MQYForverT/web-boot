<template>
    <template v-for="val in chils">
        <el-sub-menu v-if="val.children && val.children.length > 0" :key="val.path" :index="val.path">
            <template #title>
                <SvgIcon :name="v.meta.icon" />
                <span>{{ val.meta.title }}</span>
            </template>
            <sub-item :chil="val.children" />
        </el-sub-menu>
        <el-menu-item v-else :key="val.path + 1" :index="val.path">
            <template v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)">
                <SvgIcon :name="val.meta.icon ? val.meta.icon : ''" />
                <span>{{ val.meta.title }}</span>
            </template>
            <template v-else>
                <a :href="val.meta.isLink" target="_blank">
                    <SvgIcon :name="val.meta.icon ? val.meta.icon : ''" />
                    {{ val.meta.title }}
                </a>
            </template>
        </el-menu-item>
    </template>
</template>

<script setup>
    const props = defineProps({
        chil: {
            type: Array,
            default: () => [],
        },
    });

    // 获取父级菜单数据
    const chils = computed(() => {
        return props.chil;
    });
</script>
