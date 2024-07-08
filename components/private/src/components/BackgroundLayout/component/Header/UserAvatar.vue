<template>
	<el-dropdown :trigger="props.userAvatar.trigger" @command="handleCommand">
		<div class="h-14 flex-center cursor-pointer p-3 hover:bg-fill">
			<el-avatar :src="props.userAvatar.avatar || state.circleUrl" size="small" class="mr-2 shrink-0" />
			<span>{{ props.userAvatar.name || 'mqy' }}</span>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item
					v-for="item in props.userAvatar.dropdownMenu"
					:key="item.key"
					:command="item.key"
					:divided="item.divided"
				>
					{{ item.value }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
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
