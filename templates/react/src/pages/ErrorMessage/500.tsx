import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import './index.scss'

const ServerError: React.FC = () => {
	const navigate = useNavigate()

	return (
		<div className="not-container">
			<span className="i-twemoji-warning text-40" />
			<div className="not-detail">
				<div>500</div>
				<div>抱歉，服务器出错了~</div>
				<Button type="primary" onClick={() => navigate(HOME_URL)}>
					返回首页
				</Button>
			</div>
		</div>
	)
}

export default ServerError
