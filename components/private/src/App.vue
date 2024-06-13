<template>
	<!--不能使用ref、不能v-modal:updateModel-->
	<!-- <mqy-example id="example" ref="mqy" title="title1" style="margin-top: 20px" /> -->
	<mqy-background-layout ref="mqy" :isCollapse="themeConfig.isCollapse" @change="handleChange" />
</template>

<script setup lang="ts">
	// import { register } from '@/components/Example'
	// register()
	const mqy = ref(null)
	const themeConfig = ref({
		isCollapse: false,
	})

	onMounted(() => {
		mqy.value._instance.devtoolsRawSetupState.say()
		mqy.value._instance.exposed.say()
		console.log(mqy.value._instance)
	})

	const handleChange = ({ detail = [] }) => {
		// console.log('web1', detail)
		// const { isCollapse } = themeConfig.value
		themeConfig.value.isCollapse = Boolean(detail[1])
		// console.log(themeConfig.value)
		// 你的逻辑
	}
</script>
