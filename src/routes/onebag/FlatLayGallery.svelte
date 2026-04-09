<script lang="ts">
	import flat_lay_2024 from './flat_lay_2024.jpg';
	import flat_lay_2026 from './flat_lay_2026.jpg';

	const entries = [
		{ name: '2024', src: flat_lay_2024, width: 1920, height: 1536 },
		{ name: '2026', src: flat_lay_2026, width: 1920, height: 1536 }
	];

	let selected = $state(1);
</script>

{#each entries as entry, i}
	<img
		class:hidden={selected !== i}
		class="w-full"
		src={entry.src}
		alt=""
		width={entry.width}
		height={entry.height}
	/>
{/each}
<div role="radiogroup" class="mt-6 flex items-center justify-center gap-x-3">
	{#each entries as entry, i}
		<label
			class="cursor-pointer rounded-full px-3 py-0.5 text-sm text-gray-400 has-checked:text-inherit has-checked:ring-1 dark:text-gray-500"
		>
			<input class="sr-only" type="radio" name="flat-lay" value={i} bind:group={selected} />
			{entry.name}
		</label>
	{/each}
</div>
