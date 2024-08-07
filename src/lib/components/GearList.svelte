<script lang="ts">
	export let title: string;
</script>

<h2 class="mt-16 text-2xl font-extrabold">{title}</h2>
<dl class="mt-4 space-y-8 sm:space-y-10">
	<slot />
</dl>
