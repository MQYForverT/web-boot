<template>
	<div class="header">
		<div class="h-full flex-x-center">
			<span v-if="state.layout === layoutEnum.vertical" ref="logoRef"></span>
			<div class="h-full flex-y-center">
				<MenuCollapse />
				<Breadcrumb />
			</div>
		</div>
		<div class="h-full flex-y-center overflow-x-auto overflow-y-hidden">
			<slot name="header" />
			<Teleport :to="props.fullScreen.to" :disabled="!props.fullScreen.to">
				<FullScreen v-if="props.fullScreen.show" :style="{ margin: `0 ${props.fullScreen.gap || '5px'}` }" />
			</Teleport>
			<Teleport :to="globalState?.language?.to" :disabled="!globalState?.language?.to">
				<Language v-if="globalState?.language?.show" :style="{ margin: `0 ${globalState.language.gap || '5px'}` }" />
			</Teleport>
			<Teleport :to="globalState?.themeConfig?.to" :disabled="!globalState?.themeConfig?.to">
				<Theme v-if="globalState?.themeConfig?.show" :style="{ margin: `0 ${globalState.themeConfig.gap || '5px'}` }" />
			</Teleport>
			<Teleport :to="props.userAvatar.to" :disabled="!props.userAvatar.to">
				<UserAvatar v-if="props.userAvatar.show" />
			</Teleport>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { layoutEnum } from '../../BackgroundLayout'
	import FullScreen from './FullScreen.vue'
	import Language from '@/components/common/components/Language.vue'
	import Theme from '@/components/common/components/Theme.vue'
	import UserAvatar from './UserAvatar.vue'

	import MenuCollapse from './MenuCollapse.vue'
	import Breadcrumb from './Breadcrumb.vue'

	import useGlobalStore from '@/components/common/globalStore'
	import useInject from '../../hooks/useInject'
	import useContainer from '../../hooks/useContainer'
	import useState from '../../hooks/useState'

	const logoRef = ref()

	const { globalState } = useGlobalStore()
	const { props } = useInject()
	const { state } = useState()
	const { logoElement } = useContainer()

	onMounted(() => {
		if (logoRef.value && state.layout === layoutEnum.vertical) {
			logoElement.value = logoRef.value
		}
	})
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	.header {
		@apply flex-y-center justify-between h-12 p-x-0 bg-[var(--el-bg-color)] shadow-[0_0_1px_#888];
	}
</style>
