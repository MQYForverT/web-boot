import { createFetch } from '@vueuse/core'

const useMyFetch = createFetch({
	baseUrl: 'https://my-api.com',
	options: {
		async beforeFetch({ options }) {
			const myToken = await getMyToken()
			options.headers.Authorization = `Bearer ${myToken}`

			return { options }
		},
		async afterFetch({ response, data }) {
			if (response.status === 401) {
				// 处理 401 错误
				return data
			}
		},
	},
	fetchOptions: {
		mode: 'cors',
	},
})

const { isFetching, error, data } = useMyFetch('users')
