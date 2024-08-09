<script lang="ts">
	export let title: string;
</script>

<h2 class="mb-5 mt-16 text-2xl font-bold">{title}</h2>
{#if $$slots.intro}
	<div class="body-text mb-6 space-y-6">
		<slot name="intro" />
	</div>
{/if}
<dl class="space-y-6">
	<slot />
</dl>
