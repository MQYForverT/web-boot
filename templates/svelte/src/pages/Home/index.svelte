<script lang="ts">
	let count = 0
	
	const increment = () => {
		count += 1
	}
</script>

<div>
	{count}
	<button on:click={increment}>increment</button>
</div> 