<script lang="ts">
	import { onMount } from 'svelte'
	// @ts-ignore
	import router from 'page'
	import { layoutEnum } from '@mqy/component-private/dist/BackgroundLogin'
	import { HOME_URL } from '@/config/config'
	import { ApiPostLogin } from '@/api/global'
	import { globalStore } from '@/stores/index'
	let ref: HTMLElement
	
	const config = {
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
		layout: layoutEnum.right,
	}
	
	const formatAxis = (param: Date) => {
		const hour = new Date(param).getHours()
		if (hour < 6) return '凌晨好'
		else if (hour < 9) return '早上好'
		else if (hour < 12) return '上午好'
		else if (hour < 14) return '中午好'
		else if (hour < 17) return '下午好'
		else if (hour < 19) return '傍晚好'
		else if (hour < 22) return '晚上好'
		else return '夜里好'
	}
	
	// 响应式时间获取（类似React的useMemo）
	$: currentTime = formatAxis(new Date())
	
	// 显示成功通知（使用浏览器原生通知）
	const showSuccessNotification = (message: string) => {
		console.log(`✅ ${message}`)
		
		// 使用浏览器原生通知API
		if (Notification.permission === 'granted') {
			new Notification('登录成功', {
				body: message,
				icon: '/favicon.ico'
			})
		}
	}
	
	// 显示错误通知
	const showErrorNotification = (message: string) => {
		console.error(`❌ ${message}`)
		alert(message) // 使用原生alert显示错误
	}
	
	const submit = async ({ detail = [] }: { detail: any[] }) => {
		try {
			const res = await ApiPostLogin(detail[0])
			globalStore.setToken(res.accessToken)
			
			// 显示成功通知
			showSuccessNotification(`${currentTime}，欢迎回来！`)
			
			// 短暂延迟后跳转，让用户看到成功消息
			setTimeout(() => {
				router(HOME_URL)
			}, 500)
			
		} catch (error: any) {
			console.error('Login failed:', error)
			
			// 根据错误类型显示不同的错误消息
			let errorMsg = '登录失败，请重试'
			if (error?.response?.status === 401) {
				errorMsg = '用户名或密码错误'
			} else if (error?.response?.status === 500) {
				errorMsg = '服务器错误，请稍后重试'
			} else if (error?.message) {
				errorMsg = error.message
			}
			
			showErrorNotification(errorMsg)
		}
	}
	
	onMount(() => {
		// 请求通知权限
		if ('Notification' in window && Notification.permission === 'default') {
			Notification.requestPermission()
		}
		
		const handleSubmit = (res: any) => {
			switch (res.type) {
				case 'submit':
					submit(res)
					break
			}
		}
		
		ref?.addEventListener('submit', handleSubmit)
		
		return () => {
			ref?.removeEventListener('submit', handleSubmit)
		}
	})
</script>

<!-- 不需要额外的UI - 使用原生浏览器通知和alert -->

<mqy-background-login 
	bind:this={ref} 
	account={JSON.stringify(config.account)} 
	layout={config.layout} 
/>

<style>
	/* 没有额外样式 - WC组件自己处理所有UI状态 */
</style> 