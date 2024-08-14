<script lang="ts">
	export let title: string;
</script>

<div>
	<h2 class="text-2xl font-bold">{title}</h2>
	{#if $$slots.intro}
		<div class="body-text mb-6 mt-3">
			<slot name="intro" />
		</div>
	{/if}
	<dl class="mt-5 space-y-6">
		<slot />
	</dl>
</div>
