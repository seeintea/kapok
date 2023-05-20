<script>
	import '$lib/assets/css/global.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		/* background: #000000; */
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
