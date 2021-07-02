<script>
	import { onMount } from "svelte";
	import Hottest from "./Hottest.svelte";
	let hottest;

	onMount(async () => {
		await fetch(`https://whosehotterapi.herokuapp.com/apartments`)
		.then(r => r.json())
		.then(data => {
			hottest = data.hottest; 
		});
  })
</script>

<main>
	<Hottest {hottest} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>