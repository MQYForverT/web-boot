import $axios from '@/config/request'
import type { myRequestConfig } from '@tsoul/utils/dist/axios'

interface LoginResponse {
	id: number
	username: string
	email: string
	firstName: string
	lastName: string
	gender: string
	image: string
	accessToken: string
	refreshToken: string
}

export const ApiPostLogin = (data: unknown, config?: myRequestConfig): Promise<LoginResponse> =>
	$axios.post('/auth/login', data, config)
