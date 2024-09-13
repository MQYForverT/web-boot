<template>
	<div class="flex-col cursor-pointer w-[100px]">
		<div class="flex-center" :class="[checked ? 'layoutSelected' : 'layoutContainer', innerClass]">
			<slot />
		</div>
		<div class="tip">{{ tip }}</div>
	</div>
</template>

<script setup lang="ts">
	interface Props {
		checked?: boolean
		innerClass?: string
		tip?: string
	}
	defineProps<Props>()
</script>

<style>
	@unocss-placeholder;
</style>

<style scoped lang="scss">
	.layoutContainer {
		position: relative;
		border: 1px solid var(--el-border-color-light);
		border-radius: 6px;
	}

	.layoutContainer::before {
		position: absolute;
		inset: -1px;
		content: '';
		border: 2px solid var(--el-color-primary);
		border-radius: 6px;
		transition: transform 0.2s ease;
		transform: scale(0);
		transform-origin: center;
	}

	.layoutContainer:hover::before {
		transform: scale(1);
	}

	.layoutSelected {
		border: 2px solid var(--el-color-primary);
		border-radius: 6px;
	}

	.tip {
		margin-top: 8px;
		font-size: 12px;
		color: color-mix(in srgb, var(--el-text-color-regular) 65%, transparent);
		text-align: center;
	}
</style>
