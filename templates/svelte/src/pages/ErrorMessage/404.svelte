<script lang="ts">
	// @ts-ignore
	import router from 'page'
	import { HOME_URL } from '@/config/config'
	import './index.scss'
	
	const goHome = () => {
		router(HOME_URL)
	}
</script>

<div class="not-container">
	<span class="i-twemoji-flying-saucer text-40" />
	<div class="not-detail">
		<div>404</div>
		<div>抱歉，您访问的页面不存在~ 🤷‍♂️🤷‍♀️</div>
		<button class="home-button" on:click={goHome}>
			返回首页
		</button>
	</div>
</div>