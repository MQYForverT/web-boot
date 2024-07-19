<template>
	<!-- <el-dropdown :trigger="props.userAvatar.trigger" @command="handleCommand">
		<div class="h-12 flex-center cursor-pointer p-3 hover:bg-fill">
			<el-avatar :src="props.userAvatar.avatar || state.circleUrl" size="small" class="mr-2 shrink-0" />
			<span>{{ props.userAvatar.name || 'mqy' }}</span>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item
					v-for="item in props.userAvatar.dropdownMenu"
					:key="item.key"
					:command="item.key"
				>
					{{ item.value }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown> -->

	<el-popover
		placement="bottom"
		:trigger="props.userAvatar.trigger"
		:teleported="false"
		:hide-after="0"
		:show-arrow="false"
		:width="88"
		:popper-style="{ 'min-width': 'auto' }"
	>
		<template #reference>
			<div class="h-12 flex-center cursor-pointer p-3 hover:bg-fill">
				<el-avatar :src="props.userAvatar.avatar || state.circleUrl" size="small" class="mr-2 shrink-0" />
				<span>{{ props.userAvatar.name || 'mqy' }}</span>
			</div>
		</template>
		<div
			v-for="item in props.userAvatar.dropdownMenu"
			:key="item.key"
			@click="handleCommand(item.key)"
			class="flex-center bg-white cursor-pointer"
		>
			<span>{{ item.value }}</span>
		</div>
	</el-popover>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'

	const state = reactive({
		circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
	})

	const { props, emits } = useInject()

	const handleCommand = (val: string) => {
		emits('commandUser', val)
	}
</script>

<style>
	@unocss-placeholder;
</style>
