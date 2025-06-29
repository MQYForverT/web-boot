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
	<span class="i-twemoji-warning text-40" />
	<div class="not-detail">
		<div>500</div>
		<div>抱歉，服务器出错了~</div>
		<button class="home-button" on:click={goHome}>
			返回首页
		</button>
	</div>
</div> 