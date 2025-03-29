import React, { useState } from 'react'
import { Button } from 'antd'

const Home: React.FC = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			{count}
			<Button onClick={() => setCount(count + 1)}>increment</Button>
		</div>
	)
}

export default Home
