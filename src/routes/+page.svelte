<svelte:head>
	<title>𝚜𝚞𝚔𝚒</title>
	<meta name="description" content="suki's website" />
</svelte:head>

<section>
	<div class="intro">Hi, I'am sukinee</div>
</section>

<style>
	.intro {
		color: #333333;
		font-size: 5rem;
		font-style: italic;
		font-weight: bold;
		animation: action 0.5s alternate infinite;
		user-select: none;
	}

	@keyframes action {
		from {
			text-shadow: 0 0 10px #666666, 0 0 20px #666666, 0 0 30px #666666, 0 0 40px #999999,
				0 0 50px #999999, 0 0 60px #999999;
		}
		to {
			text-shadow: 0 0 5px #666666, 0 0 10px #666666, 0 0 15px #666666, 0 0 20px #999999,
				0 0 25px #999999, 0 0 30px #999999;
		}
	}
</style>
