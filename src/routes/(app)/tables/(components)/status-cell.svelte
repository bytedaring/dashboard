<script lang="ts">
	import { statues } from '../(data)/data';

	export let value: string;
	const status = statues.find((status) => status.value === value);
	const Icon = status?.icon;
</script>

{#if status}
	<div class="flex w-[100px] items-center">
		{#if Icon}
			<Icon class="mr-2 h-4 w-4 text-muted-foreground" />
		{/if}
		<span>{status.label}</span>
	</div>
{/if}
