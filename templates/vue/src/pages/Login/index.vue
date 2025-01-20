<template>
	<mqy-background-login
		:account="JSON.stringify(config.account)"
		:tip="JSON.stringify(config.tip)"
		:layout="config.layout"
		@getCode="getCode"
		@submit="submit"
	>
	</mqy-background-login>
</template>

<script setup lang="ts" name="Login">
	import { layoutEnum } from '@mqy/component-private/dist/BackgroundLogin'
	import { ApiGetSendSms } from '@/api/global'

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
				validate: { required: true, message: '必须输入手机号' },
			},
			password: {
				show: true,
				field: 'password',
				placeholder: '密码',
				default: '123456',
				validate: { required: true, message: '必须输入密码' },
			},
			code: {
				show: true,
				field: 'code',
				placeholder: '验证码',
				default: '123456',
				validate: { required: true, message: '必须输入验证码' },
			},
		},
		layout: layoutEnum.right,
	})

	const getCode = ({ detail = [] }) => {
		console.log('getcode:', detail[0])
		const { phone } = detail[0]
		ApiGetSendSms({
			phone,
		})
	}

	const submit = ({ detail = [] }) => {
		console.log('submit:', detail[0])
	}
</script>
