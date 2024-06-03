<script setup lang="ts" name="403">
	import { HOME_URL } from '@/config/config'
	const router = useRouter()
</script>

<template>
	<div class="not-container">
		<span i-twemoji-construction text-40 />
		<div class="not-detail">
			<div>403</div>
			<div>抱歉，您无权访问该页面~ 🙅‍♂️🙅‍♀️</div>
			<el-button type="primary" @click="router.push(HOME_URL)"> 返回首页 </el-button>
		</div>
	</div>
</template>

<style scoped lang="scss">
	@import url('./index.scss');
</style>
