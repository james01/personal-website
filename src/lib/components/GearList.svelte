<script lang="ts">
	export let title: string;
</script>

<h2 class="mt-16 text-2xl font-bold">{title}</h2>
<dl class="mt-5 space-y-6">
	<slot />
</dl>
