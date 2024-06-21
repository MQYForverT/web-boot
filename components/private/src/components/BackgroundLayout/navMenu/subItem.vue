<template>
	<template v-for="val in props.children">
		<el-sub-menu v-if="val.children && val.children.length > 0" :key="val.path" :index="val.path">
			<template #title>
				<slot name="menuIcon" />
				<span>{{ val.meta?.title }}</span>
			</template>
			<sub-item :children="val.children" />
		</el-sub-menu>
		<el-menu-item v-else :key="val.path + 1" :index="val.path">
			<template v-if="!val.meta?.isLink || (val.meta.isLink && val.meta.isIframe)">
				<slot name="menuIcon" />
				<span>{{ val.meta?.title }}</span>
			</template>
			<template v-else>
				<a :href="val.meta.isLink" target="_blank">
					<slot name="menuIcon" />
					{{ val.meta.title }}
				</a>
			</template>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts">
	import { ElMenuItem, ElSubMenu } from 'element-plus'

	export interface Props {
		children: Menu.MenuOptions[]
	}

	const props = withDefaults(defineProps<Props>(), {
		children: () => [],
	})
</script>

<style lang="scss">
	@use 'element-plus/theme-chalk/src/menu-item.scss';
	@use 'element-plus/theme-chalk/src/sub-menu.scss';
</style>
