<script>
	import { onMount } from "svelte";
	import Hottest from "./Hottest.svelte";
	let hottests;

	onMount(async () => {
		await fetch(`https://whosehotterapi.herokuapp.com/apartments`)
		.then(r => r.json())
		.then(data => {
			hottests = data; 
		}).catch(error => {
			window.location.href = '/error.html'
		});
  })
</script>
<svelte:head>
	<title>Seriously, whose is hotter?</title>
	<html lang="en"/>
	<link rel="stylesheet" href="styles.css">
</svelte:head>

{#if hottests}
	{#each hottests as hottest }
		<main>
			<Hottest {hottest} />
		</main>
	{/each}

{:else}
	<p class="loading">loading...</p>
{/if}

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