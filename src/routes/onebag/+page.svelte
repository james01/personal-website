<script lang="ts">
	import profile from '$lib/assets/profile.jpg';
	import flat_lay_jpg from '$lib/assets/flat_lay_2026.jpg';
	import GearItem from '$lib/components/GearItem.svelte';
	import GearList from '$lib/components/GearList.svelte';

	const title = 'Onebag Travel';
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="I spent five months traveling around the world. Here&rsquo;s what I packed."
	/>
</svelte:head>

<main class="my-16 sm:my-32">
	<div class="px-5">
		<article class="mx-auto max-w-prose">
			<header>
				<a class="flex items-center space-x-1.5" href="/" rel="home" aria-label="Go To Homepage">
					<img class="relative -top-px h-4 w-4 rounded-full" src={profile} alt="Profile" />
					<span class="font-semibold">James Randolph</span>
				</a>
				<h1 class="mt-5 text-4xl font-bold">{title}</h1>
				<p class="mt-1.5 text-xs text-gray-400 sm:text-sm dark:text-gray-500">
					Published on <time datetime="2026-04-02">April 2, 2026</time>
				</p>
			</header>
			<div class="body-text mt-5">
				<p>Intro</p>
			</div>
			<div class="-mx-5 mt-10 lg:-mx-24">
				<picture>
					<!-- <source srcset={flat_lay_avif} type="image/avif" /> -->
					<img class="w-full" src={flat_lay_jpg} alt="" width="1920" height="1536" />
				</picture>
			</div>
			<hr class="mt-10 border-gray-200 dark:border-gray-700" />
			<div class="mt-10 space-y-16">
				<GearList title="Storage">
					<GearItem
						name="Almond Oak Expandable Travel Backpack 25L + 5L"
						href="https://almondoak.com/products/travelbag"
					>
						<p>
							Almond Oak is a one-man company that makes the closest I&rsquo;ve found to the perfect
							travel backpack. I love almost everything about it:
						</p>
						<ul class="list-disc pl-5">
							<li>Most importantly, it&rsquo;s extremely lightweight (855g / 1.86lbs).</li>
							<li>It&rsquo;s small enough to be used as a personal item.</li>
							<li>
								It has a laptop compartment that:
								<ul class="list-disc pl-5">
									<li>Has a false bottom.</li>
									<li>Is accessed from the top.</li>
									<li>Doesn&rsquo;t use Velcro (it&rsquo;s too loud).</li>
								</ul>
							</li>
							<li>
								The main compartment opens clamshell-style like a suitcase, with the hinge on the
								long side of the pack. This uses less zipper (saves weight) and is more convenient
								to lay flat than if the hinge were on the short side.
							</li>
							<li>
								There&rsquo;s a mesh pocket in the main compartment that removes the need for a
								packing cube.
							</li>
							<li>
								The front pocket and laptop compartment have basic organization for chargers and
								cables and whatnot.
							</li>
							<li>The Passport pocket is hidden and convenient to access.</li>
							<li>
								The top handle is slim enough to hang on a hook, like those in restroom stalls.
							</li>
							<li>
								The zippers are easy to open (which usually isn&rsquo;t the case with waterproof
								zippers) and are made of Hypalon, which is lightweight and doesn&rsquo;t jingle.
							</li>
							<li>
								It does not have a hip belt, and the sternum strap is removable. For such a light
								backpack neither of these are necessary.
							</li>
							<li>It does not have load lifters, which look bad and don&rsquo;t help for me.</li>
							<li>The back panel does not cause my shirts to pill.</li>
							<li>The design doesn&rsquo;t draw attention to itself.</li>
							<li>It&rsquo;s not over-engineered and there are no more features than necessary.</li>
						</ul>
						<p>There are also a few things I don&rsquo;t like about the backpack:</p>
						<ul class="list-disc pl-5">
							<li>
								The Passport pocket is a little tight. I wish the opening were half an inch longer.
							</li>
							<li>
								I wish inside the front compartment there were two zippered pockets instead of just
								one with a divider. I view the front compartment as a quick access pocket, and this
								would make it just a little easier to get things into and out of it.
							</li>
						</ul>
					</GearItem>
					<GearItem name="Osprey Daylite Hanging Organizer Kit" href="https://amzn.to/3PVCUgA">
						<p>Hello</p>
					</GearItem>
					<GearItem
						name="Nanobag Pack & Nanobag Tote Bag"
						href="https://nanobag.com/products/reusable-shopping-bags"
					>
						<p>
							As the name suggests, Nanobag makes extremely lightweight bags that are small enough
							to fit in your pocket. They sell a few different types of bags but they&rsquo;re all
							made from the same thin material, which is surprisingly strong. I take two with me.
							One is a drawstring bag I use as a daypack. The other is a tote bag I use for grocery
							shopping.
						</p>
					</GearItem>
					<GearItem name="Ziploc Bag (to hold my passport)" href="https://amzn.to/4dJyctc">
						<p>
							I&rsquo;ve experimented with passport wallets, but ultimately I think a Ziploc bag is
							superior. It&rsquo;s cheap, extremely lightweight, waterproof, and transparent so I
							can easily see what&rsquo;s inside.
						</p>
					</GearItem>
				</GearList>
				<GearList title="Tech">
					<GearItem name="Epicka Air 40W Universal Travel Adapter" href="https://amzn.to/4tsbwFk">
						<p>
							If you don&rsquo;t need to worry about grounding, there are four main plug types used
							around the world: type A (Americas), type C (Europe), type G (UK) and type I
							(Australia, China).
						</p>
						<p>
							Universal adapters come with all four of these plug types built right into them.
							I&rsquo;ve tried a few universal adapters with varying degrees of success:
						</p>
						<ul>
							<li>
								The ROAD WARRIOR Universal Travel Plug Adapter has a lightweight design but gets
								annoying having to assemble it every time it&rsquo;s used. I&rsquo;m also not a fan
								of how it uses the same pins for plug types C and G.
							</li>
							<li>
								The Mogics Super Bagel is great as a power strip, but the adapter is awkward and
								fiddly to operate. The pins can be stiff to slide out, and it also uses the same
								ones for plug types C and G.
							</li>
							<li>
								The Epicka Air 40W Universal Travel Adapter is on the bulkier side, but the plugs
								are sturdy and easy to pop out. It also doubles as a 40W charger.
							</li>
							<li>
								The Anker Nano Travel Adapter is very similar to the Epicka adapter, but slightly
								flimsier and with only 20W of power output.
							</li>
						</ul>
						<p>
							Between the four I&rsquo;ve tested, I like the Epicka adapter the best. It&rsquo;s
							bulkier than others but doubles as a 40W charger, with three USB-C ports and one
							USB-A. That&rsquo;s enough to fast charge everything I need, except for my MacBook
							Air, which it charges at a normal speed. This is a fair tradeoff for the weight it
							saves.
						</p>
					</GearItem>
				</GearList>
				<GearList title="Clothing">
					<GearItem
						name="Unbound Merino Compact Travel Hoodie"
						href="https://unboundmerino.com/products/compact-travel-hoodie"
					>
						<p>
							Nice and comfortable hoodie that&rsquo;s made of merino wool so it can go longer
							between washes. It looks good as a standalone jacket but can also be used as a layer
							beneath a thicker coat. The zipper is on the left side of the jacket, which is
							different from what I&rsquo;m used to, but that&rsquo;s not a dealbreaker.
						</p>
					</GearItem>
				</GearList>
				<GearList title="Toiletries">
					{#snippet intro()}
						<p>
							Aside from what&rsquo;s listed here, most of my toiletries are generic. I restock at
							grocery stores whenever I find a section of travel-sized products.
						</p>
					{/snippet}
					<GearItem name="Philips OneBlade" href="https://amzn.to/3WtJn27">
						<p>
							I like this shaver a lot. It&rsquo;s small, lightweight, and cuts nicely without any
							irritation. The blade is removable and comes with multiple attachments so I can use it
							to cut body hair as well as facial. It charges with an included USB cable (not USB-C)
							and the battery lasts many months between charges. Replacement blades are expensive,
							but for me, they&rsquo;re worth the price.
						</p>
					</GearItem>
					<GearItem name="Yinke 5V USB-C Shaver Adapter" href="https://amzn.to/4sUy2Hq">
						<p>
							This little adapter lets me charge my Philips OneBlade with a USB-C cable. It saves me
							from carrying a special charging wire just for shaving.
						</p>
					</GearItem>
					<GearItem name="Round Foldable Hairbrush (with Mirror)" href="https://amzn.to/3WIKiwQ">
						<p>
							Unironically this might be one of my best purchases. It&rsquo;s cheap in both price
							and quality, but the design is perfect for traveling. The bristles collapse into
							themselves and the whole thing folds in half, so it fits nicely into the pocket of a
							dopp kit. Plus, there&rsquo;s a mirror inside the lid.
						</p>
					</GearItem>
					<GearItem name="Victorinox Nail Clipper" href="https://amzn.to/4v4eYYn">
						<p>
							A tiny and well-built nail clipper, made by the same company behind the Swiss Army
							Knife.
						</p>
					</GearItem>
					<GearItem name="Uncle Bill&rsquo;s Sliver Gripper" href="https://amzn.to/3PZJv9P">
						<p>
							A compact pair of tweezers. They come with a cover so the pointy end won&rsquo;t poke
							a hole through my bag.
						</p>
					</GearItem>
					<GearItem name="CANARY Mini Travel Scissors" href="https://amzn.to/4s7nByE">
						<p>
							I&rsquo;ve tried out a few pairs of travel scissors and these are my favorites.
							They&rsquo;re quite charming&mdash;people laugh when I take them out. They&rsquo;re
							super tiny but they&rsquo;re sturdy enough to cut through plastics and that sort of
							thing. I mostly use them to cut pieces of hydrocolloid tape.
						</p>
					</GearItem>
					<GearItem name="Hydrocolloid Tape" href="https://amzn.to/4tnBKce">
						<p>
							A roll of hydrocolloid tape is super versatile and takes up very little space. Pieces
							can be cut to size and used as bandages, blister pads, or pimple patches. I keep the
							roll wrapped up with a rubber band.
						</p>
					</GearItem>
					<GearItem name="humangear GoToob+ (Large)" href="https://amzn.to/4dImizG">
						<p>
							I use these refillable tubes to hold my shampoo and whatnot. I like that they&rsquo;re
							the maximum size allowed on an airplane, and that they&rsquo;re made from a material
							that feels really good in the hand. I don&rsquo;t think I would buy this brand again,
							though. They&rsquo;re too expensive, and their teardrop shape makes them awkward to
							pack.
						</p>
					</GearItem>
				</GearList>
				<GearList title="Miscellaneous">
					<GearItem
						name="Matador Ultralight Travel Towel (Large)"
						href="https://www.matadorequipment.com/products/ultralight-travel-towel-large"
					>
						<p>
							According to The Hitchhiker&rsquo;s Guide to the Galaxy, a towel &ldquo;is about the
							most massively useful thing an interstellar hitchhiker can have.&rdquo; This towel is
							by no means the softest or most absorbent, but it takes up hardly any space. Usually I
							use the towels available in hotels or Airbnbs, but if they&rsquo;re not available or
							if I&rsquo;m staying with a friend, this towel comes in handy. It also works as a
							beach towel.
						</p>
					</GearItem>
					<GearItem
						name="UNIQLO UV Protection Compact Umbrella"
						href="https://www.uniqlo.com/us/en/products/E433776-000/"
					>
						<p>
							I&rsquo;m a big fan of using an umbrella for sun protection instead of wearing a hat
							or sunscreen&mdash;especially for walking short distances between buildings. Plus, an
							umbrella doubles as rain protection, so I don&rsquo;t need to carry a rain jacket.
						</p>
					</GearItem>
				</GearList>
			</div>
		</article>
	</div>
</main>
