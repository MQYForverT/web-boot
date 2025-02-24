import $axios from '@/config/request'

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

export const ApiPostLogin = (data: unknown): Promise<LoginResponse> => $axios.post('/auth/login', data)
