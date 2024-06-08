function App() {
	useEffect(() => {
		const example = document.getElementById('example')
		if (example) {
			example.addEventListener('testEvent', (e) => {
				console.log('web', e)
			})
		}
	}, [])

	return (
		<>
			<div>12</div>
			<div>123</div>
			<mqy-example id="example" style={{ marginTop: '20px' }} title="Web Component" />
		</>
	)
}

export default App
