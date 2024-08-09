<script lang="ts">
	export let name: string;
	export let href: string | undefined = undefined;
	export let used: boolean = true;
	export let inner: boolean = false;
</script>

<div class="dark:text-white list-item list-disc text-gray-800" class:max-md:list-none={!inner}>
	<dt class="font-semibold" class:line-through={!used}>
		{#if href}
			<a class="underline" {href} target="_blank" rel="noopener noreferrer">{name}</a>
		{:else}
			{name}
		{/if}
	</dt>
	<dd class="body-text">
		<slot />
	</dd>
</div>
