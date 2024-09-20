<template>
	<mqy-background-login
		:account="JSON.stringify(config.account)"
		:tip="JSON.stringify(config.tip)"
		:layout="config.layout"
		@getCode="getCode"
		@submit="submit"
	>
		<!-- <div slot="logo">213</div> -->
		<!-- <div slot="containerBackground">213</div> -->
		<!-- <div slot="header">
			<div @click="isShowDefaultBody = true">header</div>
		</div>
		<div slot="body" v-if="!isShowDefaultBody">body</div>
		<div slot="footer" @click="isShowDefaultBody = false">footer</div> -->
		<!-- <div slot="layoutImage">layoutImage</div> -->
	</mqy-background-login>
</template>

<script setup lang="ts">
	import { layoutEnum } from '@/components/BackgroundLogin'
	const isShowDefaultBody = ref(false)
	const config = ref({
		tip: {
			title: '登录',
			submitLabel: '登录',
		},
		account: {
			username: {
				show: true,
				field: 'phone',
				placeholder: '手机号',
				default: '10086',
				validate: { required: true, message: '必须输入手机号', trigger: 'blur' },
			},
			password: { show: true, field: 'password', placeholder: '密码', default: '123456', validate: { required: true } },
			code: { show: true, field: 'code', placeholder: '验证码', default: '123456', validate: { required: true } },
		},
		layout: layoutEnum.right,
	})

	const getCode = ({ detail = [] }) => {
		console.log('getcode:', detail[0])
	}

	const submit = ({ detail = [] }) => {
		console.log('submit:', detail[0])
	}
</script>
