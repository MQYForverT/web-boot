import { LayoutType, propsEnum } from '@mqy/component-private/dist/BackgroundLayout'

function App() {
	const ref = useRef(null)
	const [isCollapse, setCollapse] = useState(false)

	const handleCustomEvent = ({ detail = [] }) => {
		console.log('web1', detail)
		switch (detail[0]) {
			case propsEnum.isCollapse:
				setCollapse(Boolean(detail[1]))
				break
		}
		// 你的逻辑
	}

	useEventListener(
		'changeProp',
		({ detail = [] }) => {
			handleCustomEvent(detail)
		},
		{ target: ref },
	)

	const { width } = useSize(document.body)!

	const layout = useMemo(() => {
		const obj = {
			layout: LayoutType.defaults,
			isCollapse: isCollapse,
		}
		if (width < 1000) {
			obj.layout = LayoutType.space
			obj.isCollapse = true
		}
		return obj
	}, [width])

	return (
		<>
			<div>react</div>
			<div>{isCollapse + ''}</div>
			<div>
				<mqy-background-layout ref={ref} is-collapse={layout.isCollapse} layout={layout.layout} />
			</div>
		</>
	)
}

export default App
