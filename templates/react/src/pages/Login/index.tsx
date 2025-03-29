import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'
import { BackgroundLogin } from '@mqy/component-private/dist/BackgroundLogin'
import { layoutEnum } from '@mqy/component-private/dist/BackgroundLogin'
import { HOME_URL } from '@/config/config'
import { ApiPostLogin } from '@/api/global'
import { useGlobalStore } from '@/stores'

const Login: React.FC = () => {
	const navigate = useNavigate()
	const globalStore = useGlobalStore()

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
	const currentTime = useMemo(() => {
		return formatAxis(new Date())
	}, [])

	const submit = async ({ detail = [] }: { detail: any[] }) => {
		console.log('submit:', detail[0])
		try {
			const res = await ApiPostLogin(detail[0])

			globalStore.setToken(res.accessToken)

			navigate(HOME_URL)
			notification.success({
				message: `${currentTime}，欢迎回来！`,
			})
		} catch (error) {
			console.error('Login failed:', error)
		}
	}

	return <BackgroundLogin account={JSON.stringify(config.account)} layout={config.layout} onSubmit={submit} />
}

export default Login
