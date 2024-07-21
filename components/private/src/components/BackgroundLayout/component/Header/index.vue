<template>
	<el-header class="header">
		<div class="flex-x-center">
			<span ref="logoRef" v-if="state.layout === layoutEnum.vertical"></span>
			<span ref="collapseRef"></span>
		</div>
		<div class="h-full flex-y-center overflow-y-hidden">
			<slot name="header" />
			<Teleport :to="props.fullScreen.to" :disabled="!props.fullScreen.to">
				<FullScreen v-if="props.fullScreen.show" />
			</Teleport>
			<Teleport :to="props.language.to" :disabled="!props.language.to">
				<Language v-if="props.language.show" />
			</Teleport>
			<Teleport :to="props.userAvatar.to" :disabled="!props.userAvatar.to">
				<UserAvatar v-if="props.userAvatar.show" />
			</Teleport>
		</div>
	</el-header>
</template>

<script lang="ts" setup>
	import { layoutEnum } from '../../BackgroundLayout'
	import FullScreen from './FullScreen.vue'
	import Language from './Language.vue'
	import UserAvatar from './UserAvatar.vue'

	import useInject from '../../hooks/useInject'
	import useContainer from '../../hooks/useContainer'
	import useState from '../../hooks/useState'

	const logoRef = ref()
	const collapseRef = ref()

	const { props } = useInject()
	const { state } = useState()
	const { logoElement, collapseElement } = useContainer()

	onMounted(() => {
		if (logoRef.value && state.layout === layoutEnum.vertical) {
			logoElement.value = logoRef.value
		}
		if (collapseRef.value) {
			collapseElement.value = collapseRef.value
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
