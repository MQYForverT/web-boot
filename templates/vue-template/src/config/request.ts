import { createAxiosInstance } from '@mqy/utils'

const $axios = createAxiosInstance({
	baseURL: import.meta.env.VITE_BASE_URL,
})

$axios.interceptors.request.use((config) => {
	console.log(2222, config)
	const headers = config.headers || {}
	headers.Authorization = useGlobalStore().token.value
	config.headers = headers

	return config
})

export default $axios
