<script>
	import '$lib/styles.css';
	import Nprogress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { navigating, updated } from '$app/stores';

	Nprogress.configure({ minimun: 0.16, showSpinner: false });

	$: {
		$navigating ? Nprogress.start() : Nprogress.done();
		if ($updated) window.location.reload();
	}
</script>

<main data-sveltekit-reload={$updated ? '' : 'off'}>
	<slot />
</main>

<style>
	:global(#nprogress .bar) {
		background: #065f46;
	}

	:global(#nprogress .peg) {
		box-shadow:
			0 0 10px #065f46,
			0 0 5px #065f46;
	}
</style>
