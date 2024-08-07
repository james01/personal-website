<script lang="ts">
	import profile from '$lib/assets/profile.jpg';
	import app_store_screenshot from '$lib/assets/app_store_screenshot.png';
	import Socials from '$lib/components/Socials.svelte';
</script>

<svelte:head>
	<title>James Randolph</title>
</svelte:head>

<main class="my-16 sm:my-32">
	<div class="px-5">
		<div class="mx-auto max-w-md">
			<img class="h-12 w-12 rounded-full" alt="Profile" src={profile} />
			<h1 class="mt-7 text-lg font-bold">James Randolph</h1>
			<div class="mt-5 space-y-5 text-lg font-medium text-gray-500">
				<p>I spend most of my time designing and developing.</p>
				<p>
					I have an
					<a class="text-gray-800 underline" href="https://apps.apple.com/us/app/practice-lock/id1555509600" target="_blank" rel="noopener noreferrer">app</a>
					on the App Store. At its
					<a class="text-gray-800 underline" href={app_store_screenshot} target="_blank" rel="noopener noreferrer">peak</a>
					it was the #1 paid app in the US.
				</p>
				<p>I spent five months traveling around the world. All I brought was a <a class="text-gray-800 underline" href="/onebag">backpack</a>.</p>
				<p>My email is jwrand16@gmail.com.</p>
			</div>
			<div class="mt-14 text-gray-500">
				<Socials />
			</div>
		</div>
	</div>
</main>
