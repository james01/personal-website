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
		<div class="mx-auto max-w-sm">
			<img class="h-12 w-12 rounded-full" alt="Profile" src={profile} />
			<div class="body-text mt-8">
				<h1 class="font-semibold text-gray-800 dark:text-white">James Randolph</h1>
				<p>I spend most of my time designing and developing.</p>
				<p>
					I have an
					<a
						class="text-gray-800 underline dark:text-white"
						href="https://apps.apple.com/us/app/practice-lock/id1555509600"
						target="_blank"
						rel="noopener noreferrer">app</a
					>
					on the App Store. At its
					<a class="text-gray-800 underline dark:text-white" href={app_store_screenshot} target="_blank" rel="noopener noreferrer">peak</a>
					it was the #1 paid app in the US.
				</p>
				<p>
					I spent five months traveling around the world. All I brought was a <a class="text-gray-800 underline dark:text-white" href="/onebag">backpack</a>.
				</p>
				<p>My email is jwrand16@gmail.com.</p>
			</div>
			<div class="mt-8 text-gray-500">
				<Socials />
			</div>
		</div>
	</div>
</main>
