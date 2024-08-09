<script lang="ts">
	import profile from '$lib/assets/profile.jpg';
	import GearItem from '$lib/components/GearItem.svelte';
	import GearList from '$lib/components/GearList.svelte';

	const title = 'Onebag Travel';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="I spent five months traveling around the world. Here is what I packed." />
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
				<p class="mt-2 text-xs text-gray-400 sm:text-sm dark:text-gray-500">Published on <time datetime="2024-08-07">August 7, 2024</time></p>
			</header>
			<div class="body-text mt-5">
				<p>
					In January 2024 I put together some gear and spent the next 5 months traveling around the world. All I brought was a backpack and whatever I could fit
					inside it.
				</p>
				<p>
					I put a lot of effort into simplifying my packing list, so I&rsquo;m using this space to share what&rsquo;s in it and how well it&rsquo;s been working
					out. I plan to keep this list updated as it evolves.
				</p>
				<p>
					The total weight of everything here is about 10kg (22lbs). If it were any heavier I wouldn&rsquo;t be able to take my bag as a carry-on in certain
					parts of the world, like Southeast Asia and the Middle East. Some airlines even enforce a maximum weight of 7kg, but I find that 7kg isn&rsquo;t
					enough, while 10kg is the sweet spot.
				</p>
				<p>
					Finally, as a disclaimer, some of the links on this page are affiliate links. This means I make a small percentage of the sale if you buy something
					after clicking one (it doesn&rsquo;t cost you anything extra). If you found this list helpful, consider supporting me by buying something through one
					of the links.
				</p>
			</div>
			<hr class="mt-16 border-gray-200 dark:border-gray-700" />
			<GearList title="Storage">
				<GearItem name="Aer Travel Pack 3 X-Pac" href="https://aersf.com/products/travel-pack-3-x-pac">
					<p>
						Backpack design is about sacrifices; an improvement in one area often comes at the expense of another. With that being said, I think this pack finds
						a good balance. It&rsquo;s a little on the heavier side, but has the right amount of structure and organization. I prefer the X-Pac version for its
						waterproofness and cleanability, although the AquaGuard zippers are a bit stiff at first and do take a few days to break in. I also prefer the
						orange interior of the X-Pac version.
					</p>
					<p>
						I like the clamshell opening of the pack. I like the variety of pocket sizes, especially in the admin panel, that makes it easy to organize smaller
						items. I like how the water bottle pocket zips up when not in use. I like how the compression straps can flatten the pack into a medium-sized day
						pack. I like how the material doesn&rsquo;t cause my shirts to pill.
					</p>
					<p>
						I don&rsquo;t like the load lifters on the shoulder straps. They&rsquo;re awkward to use, don&rsquo;t look good, and I don&rsquo;t notice much of an
						ergonomic difference when using them. I don&rsquo;t like how the top carry handle is centered, making it difficult to hang the pack from a hook
						(like in a restroom stall). I don&rsquo;t like how the laptop compartment has a divider down the middle that snags my laptop every time I slide it
						in.
					</p>
					<p>
						I tried out both the hip belt and the sternum strap, but removed them after not finding either to be useful. For a bag of this size I don&rsquo;t
						think a hip belt is worth the extra weight.
					</p>
					<p>
						The pack does not have any built-in security features, which I support. Locked zippers make it harder for a thief to open the bag, but more commonly
						they just make it harder for me to open it. Instead, I prefer to simply put my valuables in inner pockets, and not leave the bag unattended in the
						first place.
					</p>
					<p>
						The pack does not have any features to stow away the shoulder straps into a kind of &ldquo;duffel bag mode&rdquo; either, which I also support. In
						practice I have never needed this feature, and prefer the simplicity of the bag without it.
					</p>
				</GearItem>
				<GearItem name="Aer Travel Kit 2 X-Pac" href="https://aersf.com/products/travel-kit-2-x-pac">
					<p>
						I love this kit for holding my toiletries. It has a nice variety of pockets, and the X-Pac material makes it easy to wipe off spills. I love the
						hook on top that hangs the kit from a shelf or towel rack. I also love the toothbrush holders on either side, although I wish they were improved to
						not trap water and so the bristles wouldn&rsquo;t sometimes touch the wall when hanging the kit from a towel rack.
					</p>
				</GearItem>
				<GearItem name="Aer Packing Cube" href="https://aersf.com/products/packing-cube">
					<p>
						I use a single packing cube to hold all my clothes. I like Aer&rsquo;s because it&rsquo;s sized to fit their backpacks, but I&rsquo;m not loyal to
						any specific brand.
					</p>
				</GearItem>
				<GearItem name="Nike Drawstring Bag">
					<p>
						This is my ideal day pack. It&rsquo;s lightweight yet fits everything I need. When not in use, it folds flatly in half and takes up little space. I
						like the Nike version because it has a laptop divider and a zipper pocket, but if I find a better one I&rsquo;d probably upgrade.
					</p>
					<p>
						This bag also solves the problem of when I&rsquo;m forced to check in my main backpack at the airport (I&rsquo;ve never been asked to do this but
						it&rsquo;s good to be prepared). I put my laptop and anything fragile in the drawstring bag, then take it on the plane as my carry-on.
					</p>
				</GearItem>
				<GearItem name="Ziploc Bag (to hold my passport)">
					<p>
						I&rsquo;ve experimented with passport wallets, but ultimately I think a Ziploc bag is superior. It&rsquo;s cheap, extremely lightweight, waterproof,
						and transparent so you can easily see what&rsquo;s inside.
					</p>
				</GearItem>
				<GearItem name="Allett Travel Wallet | Nylon Edition" href="https://www.all-ett.com/products/travel-wallet" used={false}>
					<p>
						I bought this to hold my passport, extra cash, and a backup credit card. I ended up returning it. Despite being one of the thinnest passport wallets
						on the market, I still found it to be too thick. Even worse, it had a tendency to spring open when folded, even when there wasn&rsquo;t much inside
						it. I prefer to store things in the smaller pockets of my backpack instead.
					</p>
				</GearItem>
				<GearItem name="Aer Slim Pouch" href="https://aersf.com/products/slim-pouch" used={false}>
					<p>
						I really like the design of this pouch, but I ended up not needing it. I originally used it to store tech items like my mouse and chargers, but I
						was able to simplify and store them all in the various pockets of my main backpack instead. It takes up less space that way, and I find it easier to
						access everything. This pouch is also available in X-Pac, but since it doesn&rsquo;t need to get wet I opted for the normal material.
					</p>
				</GearItem>
			</GearList>
			<GearList title="Tech">
				<GearItem name="MacBook Pro (16-inch, 2019)" href="https://www.apple.com/macbook-pro/">
					<p>
						I love this machine. I upgraded from the 2012 version and plan to upgrade again in a generation or two. Unfortunately, after 2019, MacBook Pros took
						a step backwards in terms of bulkiness, but there are rumors the next model will be significantly thinner. In general, I stick to Apple products
						whenever possible; Apple&rsquo;s locked-in ecosystem gets a lot of flak, but in reality it offers a lot of convenience.
					</p>
				</GearItem>
				<GearItem name="Apple Magic Mouse" href="https://amzn.to/3Yp78dY">
					<p>
						A lot of people complain about this mouse but I&rsquo;ve had it for over a decade and I love it. It&rsquo;s relatively flat which makes it easy to
						pack, and I&rsquo;ve never had a problem with its ergonomics. I still have the original version that runs on AA batteries, but plan on upgrading to
						a USB-C version as soon as they make one available.
					</p>
				</GearItem>
				<GearItem name="iPhone 13" href="https://www.apple.com/iphone/">
					<p>
						Just about all my other tech is made by Apple. So is my phone. I have the normal version since I don&rsquo;t take enough photos to justify upgrading
						to the Pro.
					</p>
				</GearItem>
				<GearItem name="MOGICS Super Bagel" href="https://amzn.to/3WjbYH9">
					<p>
						Despite MOGICS&rsquo;s crude-looking <a class="underline" href="https://www.mogics.com" target="_blank" rel="noopener noreferrer">website</a>, this
						product is amazing. The extension cord comes in handy at hotels and coffee shops with hard-to-reach outlets, and the international adapter is as
						compact as they come. The bagel shape seems gimmicky at first but turns out to be the ideal form factor: it fits easily into a pocket, and the
						rounded shape prevents large plugs from colliding. I only wish they offered an upgraded version with a braided cable.
					</p>
				</GearItem>
				<GearItem name="mophie powerstation mini" href="https://www.apple.com/shop/product/HQ3B2ZM/A/mophie-powerstation-mini">
					<p>
						I&rsquo;m not too loyal to any specific power bank, as long as it&rsquo;s small and uses USB-C. This one checks both boxes. I only need enough
						capacity to prevent my phone from dying at a bad moment; any more is just extra weight.
					</p>
				</GearItem>
				<GearItem name="Apple AirPods Pro" href="https://amzn.to/4fa7hrM">
					<p>
						They have good audio quality for their small size. The noise cancellation comes in handy when trying to sleep on a long flight. I have the version
						that charges with a Lightning cable, but will eventually upgrade to USB-C so I only have to carry one type of cable.
					</p>
				</GearItem>
				<GearItem name="Apple AirTag" href="https://amzn.to/3zTqIVz">
					<p>
						In all honesty, I only bought this because my backpack has a devoted slot for one. Hopefully I&rsquo;ll never need to use it, but I suppose if I do
						I&rsquo;ll be glad I have it.
					</p>
				</GearItem>
				<GearItem name="Apple Watch" href="https://www.apple.com/watch/" used={false}>
					<p>
						At the end of the day I&rsquo;m just not a watch person. I thought I would use this to track my exercise and help with directions, but I ended up
						leaving it in my backpack most of the time. It&rsquo;s a cool gadget, but it&rsquo;s just another item to carry around and worry about charging.
					</p>
				</GearItem>
			</GearList>
			<GearList title="Clothing">
				<GearItem name="UNIQLO AIRism Boxer Briefs" href="https://www.uniqlo.com/us/en/products/E454326-000/">
					<p>
						These are great underwear. They&rsquo;re comfortable, and most importantly, they breathe. They&rsquo;re also available in low-rise and seamless
						versions, but I prefer the originals. The low-rise aren&rsquo;t as comfortable, and the seamless are a bit tighter and tend to get bunched up more
						easily.
					</p>
				</GearItem>
				<GearItem name="UNIQLO Cotton Boxer Briefs" href="https://www.uniqlo.com/us/en/products/E464311-000/" used={false}>
					<p>
						They&rsquo;re fine when it&rsquo;s cold out, but not when it&rsquo;s humid and 100&deg;F and you&rsquo;ve been walking for two hours and the last
						time you showered was on Monday. I think the same would apply to any brand of cotton underwear.
					</p>
				</GearItem>
			</GearList>
			<GearList title="Toiletries">
				<svelte:fragment slot="intro">
					<p>
						Aside from what&rsquo;s listed here, most of my toiletries are generic. I restock at grocery stores whenever I find a section of travel-sized
						products.
					</p>
				</svelte:fragment>
				<GearItem name="Philips OneBlade" href="https://amzn.to/3WtJn27">
					<p>
						I like this shaver quite a lot. It&rsquo;s small, lightweight, and cuts nicely without any irritation. The blade is removable and comes with
						multiple attachments so I can use it to cut body hair as well as facial. It charges with a USB cable (though not USB-C) and I&rsquo;ve been using it
						for over six months on a single charge. Replacement blades are expensive, but for me, they&rsquo;re worth the price.
					</p>
				</GearItem>
				<GearItem name="Crystal Mineral Deodorant" href="https://amzn.to/4d4ZAl8">
					<p>
						I bought this on a whim because it was the smallest deodorant stick available at the store, but I ended up really liking it. It&rsquo;s basically
						just a block of potassium mineral salt with no other ingredients. The downside is that while it prevents new odors, it doesn&rsquo;t mask existing
						ones, so I found I had to apply it after every shower for it to work. The upside is how compact it is. I only had to replace it after I dropped it
						and it shattered, but otherwise it probably would have lasted several years. Plus, it doesn&rsquo;t stain my shirts.
					</p>
				</GearItem>
				<GearItem name="Round Foldable Hairbrush (with Mirror)" href="https://amzn.to/3WIKiwQ">
					<p>
						Unironically this might be one of my best purchases. It&rsquo;s cheap in both price and quality, but the design is perfect for traveling. The
						bristles collapse into themselves and the whole thing folds in half, so it fits nicely into the pocket of a dopp kit. Plus, there&rsquo;s a mirror
						inside the lid which is always useful to have.
					</p>
				</GearItem>
			</GearList>
			<GearList title="Miscellaneous">
				<GearItem name="Vapur Bottle" href="https://amzn.to/4dhCZSs">
					<p>
						This was the closest I could find to an ideal travel bottle. It&rsquo;s lightweight and rolls up to a small size, but is still able to stand up on
						its own. I don&rsquo;t like that it traps water (read: grows mold) where the plastic is joined together at the base. I don&rsquo;t like how clunky
						and unsatisfying it feels to roll it up. I don&rsquo;t like how I&rsquo;ve cut my finger twice while popping open the weird shape of the cap. The
						bottle packs small though which makes up for its shortcomings.
					</p>
				</GearItem>
				<GearItem name="J+S Aviator Sunglasses" href="https://amzn.to/3AdSWdN">
					<p>
						Especially while traveling, it&rsquo;s so easy to destroy a pair of sunglasses that I prefer to buy cheap ones off Amazon. Even so, I&rsquo;ve had
						these for years and they&rsquo;re still holding up. They came with a carrying case, and to save space, I use it to hold my Philips OneBlade razor as
						well as the glasses.
					</p>
				</GearItem>
				<GearItem name="Matador Ultralight Travel Towel (Large)" href="https://www.matadorequipment.com/products/ultralight-travel-towel-large">
					<p>
						According to The Hitchhiker&rsquo;s Guide to the Galaxy, a towel &ldquo;is about the most massively useful thing an interstellar hitchhiker can
						have.&rdquo; This towel is by no means the softest or most absorbent, but it takes up hardly any space. Usually I use the towels available in hotels
						or Airbnbs, but if they&rsquo;re not available or if I&rsquo;m staying with a friend, this towel comes in handy. It can also work as a beach towel.
					</p>
				</GearItem>
				<GearItem name="UNIQLO UV Protection Compact Umbrella" href="https://www.uniqlo.com/us/en/products/E433776-000/">
					<p>
						I&rsquo;m a big fan of using an umbrella for sun protection instead of wearing a hat or sunscreen—especially for walking short distances between
						buildings. Plus, an umbrella doubles as rain protection, so I don&rsquo;t need to carry a rain jacket.
					</p>
				</GearItem>
				<GearItem name="BIC Cristal Pen" href="https://amzn.to/4cbbA3u">
					<p>
						I&rsquo;ve tried many different types of pens, including fancy ones, and this one remains my favorite. It comes in handy for filling out customs and
						immigration forms.
					</p>
				</GearItem>
				<GearItem name="Plastic Yellow Spork">
					<p>
						I ordered food somewhere in Taiwan and it came with a plastic yellow spork. It was good quality so I ended up rinsing it off and taking it with me
						when I finished eating. Sometimes it&rsquo;s more fun to scavenge items on the go than to bring them from home.
					</p>
				</GearItem>
			</GearList>
		</article>
	</div>
</main>
