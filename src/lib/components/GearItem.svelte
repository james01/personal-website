<script lang="ts">
	export let name: string;
	export let href: string | undefined = undefined;
	export let used: boolean = true;
</script>

<div class="md:list-item">
	<dt class="font-bold sm:text-lg" class:line-through={!used}>
		{#if href}
			<a class="underline" {href} target="_blank" rel="noopener noreferrer">{name}</a>
		{:else}
			{name}
		{/if}
	</dt>
	<dd class="mt-1 space-y-4 font-medium text-gray-500 max-sm:text-sm sm:mt-2">
		<slot />
	</dd>
</div>
