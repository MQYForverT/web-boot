import { createFetch } from '@vueuse/core'

const useMyFetch = createFetch({
	baseUrl: `${import.meta.env.VITE_BASE_API}/${import.meta.env.VITE_PROJECT_NAME}`, // url = base url + request url
	options: {
		timeout: 5000,
		async beforeFetch(ctx) {
			const myToken = await getMyToken()
			if (ctx.options.headers) {
				;(ctx.options.headers as Record<string, string>)['Authorization'] = `Bearer ${myToken}`
			}

			return ctx
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
