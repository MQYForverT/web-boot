<template>
	<tsoul-background-login :account="JSON.stringify(config.account)" :layout="config.layout" @submit="submit">
	</tsoul-background-login>
</template>

<script setup lang="ts">
	import { HOME_URL } from '@/config/config'
	import type { layoutEnum } from '@tsoul/component-private/BackgroundLogin/BackgroundLogin'
	import { ApiPostLogin } from '@/api/global'

	const router = useRouter()

	const config = ref({
		account: {
			username: {
				show: true,
				field: 'username',
				placeholder: '用户名',
				default: 'emilys', // 使用 DummyJSON 提供的测试账号
				validate: { required: true, message: '必须输入用户名' },
				btnLabel: '获取验证码',
			},
			password: {
				show: true,
				field: 'password',
				placeholder: '密码',
				default: 'emilyspass', // 使用对应的密码
				validate: { required: true, message: '必须输入密码' },
			},
		},
		layout: 'right' as layoutEnum,
	})

	const formatAxis = (param: Date) => {
		let hour = new Date(param).getHours()
		if (hour < 6) return '凌晨好'
		else if (hour < 9) return '早上好'
		else if (hour < 12) return '上午好'
		else if (hour < 14) return '中午好'
		else if (hour < 17) return '下午好'
		else if (hour < 19) return '傍晚好'
		else if (hour < 22) return '晚上好'
		else return '夜里好'
	}

	// 时间获取
	const currentTime = computed(() => {
		return formatAxis(new Date())
	})

	const submit = async ({ detail = [] }) => {
		console.log('submit:', detail[0])
		const res = await ApiPostLogin(detail[0])

		const currentTimeInfo = currentTime.value
		useGlobalStore().token.value = res.accessToken
		router.push(HOME_URL)
		ElNotification.success(`${currentTimeInfo}，欢迎回来！`)
	}
</script>
