import { propsEnum } from '@mqy/component-private/dist/BackgroundLayout'

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

	const getCollapse = useMemo(() => {
		return width < 1000 ? true : isCollapse
	}, [width])

	return (
		<>
			<div>react</div>
			<div>{isCollapse + ''}</div>
			<div>
				<mqy-background-layout is-collapse={getCollapse}>
					<div slot="body">666</div>
				</mqy-background-layout>
			</div>
		</>
	)
}

export default App
