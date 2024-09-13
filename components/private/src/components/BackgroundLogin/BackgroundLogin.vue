<template>
	<div
		class="login-container"
		:style="{
			height: proxyProps.containerSize.height || '100vh',
			width: proxyProps.containerSize.width || '100vw',
			...(proxyProps.containerSize.style || {}),
		}"
	>
		<el-config-provider v-bind="globalState.uiConfigProvider">
			<Top>
				<template #logo>
					<slot name="logo">
						<LogoIcon width="42" height="42" fill="var(--el-color-primary)" />
					</slot>
				</template>
			</Top>
			<el-card class="z-1 !border-none w-100 !bg-transparent !rounded-4% <sm:w-83">
				<h3 class="mt-6 font-500 text-primary text-18px" type="primary">登录</h3>
				<el-form ref="formRef" :model="form" :rules="formRules" class="mt-6" size="large">
					<el-form-item prop="username">
						<el-input v-model="form.username" placeholder="账号" />
					</el-form-item>
					<el-form-item prop="password">
						<el-input v-model="form.password" show-password placeholder="密码" type="password" />
					</el-form-item>
					<el-form-item>
						<div class="w-full flex-y-center justify-between">
							<el-checkbox v-model="checked" class="<sm:text-sm"> 记住密码 </el-checkbox>
							<el-text type="primary" class="cursor-pointer <sm:!text-sm"> 忘记密码 </el-text>
						</div>
					</el-form-item>
					<el-form-item>
						<el-button class="w-full" type="primary" @click="onLogin" :loading="loading"> 登录 </el-button>
					</el-form-item>
					<el-form-item>
						<el-button class="w-full"> 注册</el-button>
					</el-form-item>
				</el-form>
			</el-card>

			<slot name="containerBackground">
				<div
					class="containerBackground"
					:style="{
						background: `url(${proxyProps.containerBackground.background || '/src/assets/background.svg'}) no-repeat center center / cover`,
						opacity: proxyProps.containerBackground.opacity || 1,
						...(proxyProps.containerBackground.style || {}),
					}"
				/>
			</slot>
		</el-config-provider>
	</div>
</template>

<script setup lang="ts">
	import useGlobalStore from '@/components/common/globalStore'
	import { initProps, propsKey, processPropType, emitsKey } from './BackgroundLogin'
	import type { Emits } from './BackgroundLogin'

	import Top from './component/Top/index.vue'

	import LogoIcon from '~icons/mqy-icon/logo'

	const { globalState } = useGlobalStore()

	const props = defineProps(initProps)
	const proxyProps = processPropType(props)
	provide(propsKey, proxyProps)

	const emits = defineEmits<Emits>()
	provide(emitsKey, emits)

	const formRef = ref()
	const checked = ref(false)
	const loading = ref(false)

	const form = reactive({
		username: 'admin',
		password: '123456',
	})

	const formRules = reactive({})

	const onLogin = async () => {
		await formRef.value?.validate()
		try {
			loading.value = true
			console.log(form)
			// await userStore.login(form)
		} finally {
			loading.value = false
		}
	}

	onMounted(() => {
		// 这里直接进行赋值是为了触发set拦截从而初始化主题
		nextTick(() => {
			globalState.theme = globalState.theme
		})
	})
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	// 把所有用到的element样式都在这里申明
	@use 'element-plus/theme-chalk/src/card';
	@use 'element-plus/theme-chalk/src/form';
	@use 'element-plus/theme-chalk/src/text';
	@use 'element-plus/theme-chalk/src/button';
	@use 'element-plus/theme-chalk/src/input';
	@use 'element-plus/theme-chalk/src/switch';
	@use 'element-plus/theme-chalk/src/icon';
	@use 'element-plus/theme-chalk/src/dropdown';

	.login-container {
		@apply relative wh-full flex-center dark:bg-#101628 bg-no-repeat bg-center-top;
	}

	.containerBackground {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		height: 100%;
		pointer-events: none;
		filter: brightness(0.75);
	}
</style>
