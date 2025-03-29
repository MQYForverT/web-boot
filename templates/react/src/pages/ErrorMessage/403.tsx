import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import './index.scss'

const Forbidden: React.FC = () => {
	const navigate = useNavigate()

	return (
		<div className="not-container">
			<span className="i-twemoji-prohibited text-40" />
			<div className="not-detail">
				<div>403</div>
				<div>抱歉，您没有访问该页面的权限~</div>
				<Button type="primary" onClick={() => navigate(HOME_URL)}>
					返回首页
				</Button>
			</div>
		</div>
	)
}

export default Forbidden
