<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		intro?: Snippet;
		children: Snippet;
	}

	let { title, intro, children }: Props = $props();
</script>

<div>
	<h2 class="text-2xl font-bold">{title}</h2>
	{#if intro}
		<div class="body-text mb-6 mt-3">
			{@render intro?.()}
		</div>
	{/if}
	<dl class="mt-5 space-y-6">
		{@render children()}
	</dl>
</div>
