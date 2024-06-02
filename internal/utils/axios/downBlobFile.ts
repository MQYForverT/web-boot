import type { AxiosResponse } from 'axios'
/**
 * 从响应中下载 Blob 文件
 * @param response Axios响应对象
 */
export default function downBlobFile(response: AxiosResponse): void {
	// 获取文件名
	const disposition = response.headers['content-disposition']
	let filename = 'downloaded_file'
	if (disposition && disposition.includes('attachment')) {
		const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
		const matches = filenameRegex.exec(disposition)
		if (matches != null && matches[1]) {
			filename = matches[1].replace(/['"]/g, '')
		}
	}

	// 创建 Blob 对象
	const blob = new Blob([response.data], { type: response.headers['content-type'] })

	// 创建 URL 对象
	const url = window.URL.createObjectURL(blob)

	// 创建下载链接
	const link = document.createElement('a')
	link.href = url
	link.download = filename
	document.body.appendChild(link)
	link.click()

	// 清理
	document.body.removeChild(link)
	window.URL.revokeObjectURL(url)
}
