import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import './index.scss'

const NotFound: React.FC = () => {
	const navigate = useNavigate()

	return (
		<div className="not-container">
			<span className="i-twemoji-flying-saucer text-40" />
			<div className="not-detail">
				<div>404</div>
				<div>抱歉，您访问的页面不存在~ 🤷‍♂️🤷‍♀️</div>
				<Button type="primary" onClick={() => navigate(HOME_URL)}>
					返回首页
				</Button>
			</div>
		</div>
	)
}

export default NotFound
