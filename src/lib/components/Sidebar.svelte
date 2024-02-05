<script>
	import { isOpenSidebar } from '$lib/stores/dashboardStore';
	import { page, navigating } from '$app/stores';
	import { links } from '$lib/data/links';
	import Icon from '@iconify/svelte';
	import { PUBLIC_SITE_NAME } from '$env/static/public';

	let routedId = '';

	$: {
		routedId = $page.url.pathname;
		if ($navigating) isOpenSidebar.set(true);
	}
</script>

<aside class="relative w-64 h-full">
	<div class="relative">
		<button
			on:click={() => isOpenSidebar.set(false)}
			class="bg-primary-700 block md:hidden text-white p-1 text-xl absolute right-0 rounded-tl-md rounded-bl-md"
		>
			<Icon icon="uil:times" class="text-2xl" />
		</button>
		<div class="h-16 sticky top-0 shadow-sm items-center px-4 py-2">
			<a href="/" class="flex-0 btn btn-ghost px-2">
				<div class="font-title inline-flex text-lg md:text-2xl">{PUBLIC_SITE_NAME}</div>
			</a>
		</div>
		<div class="h-4"></div>
		<ul class="menu px-4 py-0">
			{#each links as link}
				<li>
					{#if link.path}
						<a href={link.path} class="group">
							<Icon icon={link.icon.inactive} class="text-3xl mr-3"></Icon>
							{link.name}
						</a>
					{:else if link.nested_links}
						<details>
							<summary class="">
								<Icon icon={link.icon.inactive} class="text-3xl mr-3"></Icon>
								{link.name}
							</summary>
							<ul>
								<li>
									{#each link.nested_links as subLink}
										<a href={subLink.path} class="group">
											{subLink.name}
										</a>
									{/each}
								</li>
							</ul>
						</details>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</aside>
