<script>
	import favicon from '$lib/assets/favicon.svg';
	import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
