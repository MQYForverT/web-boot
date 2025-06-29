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
	<span class="i-twemoji-prohibited text-40" />
	<div class="not-detail">
		<div>403</div>
		<div>抱歉，您没有访问该页面的权限~</div>
		<button class="home-button" on:click={goHome}>
			返回首页
		</button>
	</div>
</div> 