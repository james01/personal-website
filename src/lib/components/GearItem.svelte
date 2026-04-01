<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		name: string;
		href?: string;
		used?: boolean;
		inner?: boolean;
		children: Snippet;
	}

	let { name, href = undefined, used = true, inner = false, children }: Props = $props();
</script>

<div class="list-item list-disc text-gray-800 dark:text-white" class:max-md:list-none={!inner}>
	<dt class="font-semibold" class:line-through={!used}>
		{#if href}
			<a class="underline" {href} target="_blank" rel="noopener noreferrer">{name}</a>
		{:else}
			{name}
		{/if}
	</dt>
	<dd class="body-text">
		{@render children()}
	</dd>
</div>
