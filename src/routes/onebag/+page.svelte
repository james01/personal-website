<script lang="ts">
	import profile from '$lib/assets/profile.jpg';
	import flat_lay_jpg from '$lib/assets/flat_lay.jpg';
	import flat_lay_avif from '$lib/assets/flat_lay.avif';
	import GearItem from '$lib/components/GearItem.svelte';
	import GearList from '$lib/components/GearList.svelte';

	const title = 'Onebag Travel';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="I spent five months traveling around the world. Here&rsquo;s what I packed." />
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
				<p class="mt-1.5 text-xs text-gray-400 sm:text-sm dark:text-gray-500">Published on <time datetime="2024-08-07">August 7, 2024</time></p>
			</header>
			<div class="body-text mt-5">
				<p>In January 2024 I put together some gear and spent the next 5 months traveling around the world. All I brought was a backpack.</p>
				<p>I put a lot of effort into refining what was inside that backpack, so I&rsquo;m using this space to share the list as it evolves.</p>
				<p>
					The total weight of everything here is about 10kg (22lbs). Any heavier and I wouldn&rsquo;t be able to take my bag as a carry-on in places like
					Southeast Asia and the Middle East. Two common cutoffs are 7kg and 10kg&mdash;7kg isn&rsquo;t enough, but 10kg is the sweet spot.
				</p>
				<p>
					As a disclaimer, some of the links on this page are affiliate links. This means I make a small percentage of the sale if you click one and buy
					something (it doesn&rsquo;t cost you anything extra). If you found this list helpful, consider supporting me by buying something through one of the
					links.
				</p>
				<p>
					Finally, consider checking out Jeremy Maluf&rsquo;s
					<a class="underline" href="https://jeremymaluf.com/onebag/" target="_blank" rel="noopener noreferrer">packing list</a>
					as well. I found it to be a helpful resource when preparing my own.
				</p>
			</div>
			<div class="-mx-5 mt-10 lg:-mx-24">
				<picture>
					<source srcset={flat_lay_avif} type="image/avif" />
					<img class="w-full" src={flat_lay_jpg} alt="" width="1920" height="1440" />
				</picture>
			</div>
			<hr class="mt-10 border-gray-200 dark:border-gray-700" />
			<div class="mt-10 space-y-16">
				<GearList title="Storage">
					<GearItem name="Aer Travel Pack 3 X-Pac" href="https://aersf.com/products/travel-pack-3-x-pac">
						<p>
							Backpack design is about sacrifices; an improvement in one area often comes at the expense of another. With that being said, I think this pack
							finds a good balance. It&rsquo;s a little on the heavier side, but has the right amount of structure and organization. I prefer the X-Pac version
							for its waterproofness and cleanability, although the AquaGuard zippers are a bit stiff at first and do take a few days to break in. I also prefer
							the orange interior of the X-Pac version.
						</p>
						<p>
							I like the clamshell opening of the pack. I like the variety of pocket sizes, especially in the admin panel, that makes it easy to organize
							smaller items. I like how the water bottle pocket zips up when not in use. I like how the compression straps can flatten the pack into a
							medium-sized day pack. I like how the material doesn&rsquo;t cause my shirts to pill.
						</p>
						<p>
							I don&rsquo;t like the load lifters on the shoulder straps. They&rsquo;re awkward to use, don&rsquo;t look good, and I don&rsquo;t notice much of
							an ergonomic difference when using them. I don&rsquo;t like how the top carry handle is centered, making it difficult to hang the pack from a hook
							(like in a restroom stall). I don&rsquo;t like how the laptop compartment has a divider down the middle that snags my laptop every time I slide it
							in.
						</p>
						<p>
							I tried out both the hip belt and the sternum strap, but removed them after not finding either to be useful. For a bag of this size I don&rsquo;t
							think a hip belt is worth the extra weight.
						</p>
						<p>
							The pack has very minimal security features, which I&rsquo;m fine with. They make it harder for a thief to open the bag, but more commonly they
							just make it harder for me to open it. Instead, I prefer to simply put my valuables in inner pockets, and not leave the bag unattended in the
							first place.
						</p>
						<p>
							The pack does not have any features to stow away the shoulder straps into a kind of &ldquo;duffel bag mode&rdquo; either, which I&rsquo;m also
							fine with. In practice I have never needed this feature, and prefer the simplicity of the bag without it.
						</p>
					</GearItem>
					<GearItem name="Aer Travel Kit 2 X-Pac" href="https://aersf.com/products/travel-kit-2-x-pac">
						<p>
							I love this kit for holding my toiletries. It has a nice variety of pockets, and the X-Pac material makes it easy to wipe off spills. I love the
							hook on top that hangs the kit from a shelf or towel rack. I also love the toothbrush holders on either side, although I wish they were improved
							to not trap water and so the bristles wouldn&rsquo;t touch the wall when hanging the kit from a towel rack.
						</p>
					</GearItem>
					<GearItem name="Aer Packing Cube" href="https://aersf.com/products/packing-cube">
						<p>
							I use a single packing cube to hold all my clothes. I like Aer&rsquo;s because it&rsquo;s sized to fit their backpacks, but I&rsquo;m not loyal to
							any specific brand.
						</p>
					</GearItem>
					<GearItem name="Nike Drawstring Bag" href="https://amzn.to/3SRHviv">
						<p>
							A drawstring bag is the ideal day pack. It&rsquo;s lightweight yet fits everything I need. When not in use, it folds flatly in half and takes up
							little space. I like the Nike version because it has a laptop divider and a zipper pocket, but if I find a better one I&rsquo;d probably upgrade.
						</p>
						<p>
							A drawstring bag also solves the problem of when I&rsquo;m forced to check in my main backpack at the airport (I&rsquo;ve never been asked to do
							this but it&rsquo;s good to be prepared). I put my laptop and anything fragile in the drawstring bag, then take it on the plane as my carry-on.
						</p>
					</GearItem>
					<GearItem name="Foldable Tote Bag" href="https://www.orbitkey.com/products/foldable-tote-bag">
						<p>
							I like to buy groceries when I&rsquo;ll be staying in the same place for a while so this is essential. I got mine for free with a purchase from
							Orbitkey, but any brand should work as long as it isn&rsquo;t overengineered. All it needs to do is hold a few groceries, or maybe a beach towel
							and sunscreen for an impromptu trip to the beach.
						</p>
					</GearItem>
					<GearItem name="Ziploc Bag (to hold my passport)" href="https://amzn.to/4dJyctc">
						<p>
							I&rsquo;ve experimented with passport wallets, but ultimately I think a Ziploc bag is superior. It&rsquo;s cheap, extremely lightweight,
							waterproof, and transparent so I can easily see what&rsquo;s inside.
						</p>
					</GearItem>
					<GearItem name="Osprey Farpoint 55L Backpack" href="https://amzn.to/4cotSyj" used={false}>
						<p>
							This is the backpack I originally planned to take with me. I bought it because it comes with a detachable daypack and has shoulder straps that
							stow away when checking in the bag on an airplane. I ended up returning it because it was too big and overcomplicated. The problems these features
							solve turned out to have simpler solutions, or weren&rsquo;t big issues in the first place.
						</p>
					</GearItem>
					<GearItem name="Aer City Sling 2 X-Pac" href="https://aersf.com/products/city-sling-2-x-pac" used={false}>
						<p>
							I&rsquo;m just not a fan of slings. They feel awkward to carry and they can&rsquo;t really hold that much. I originally bought this with the goal
							of doubling its use as a tech pouch, but I ended up returning it. It&rsquo;s a well-built product but it&rsquo;s not for me.
						</p>
					</GearItem>
					<GearItem name="Allett Travel Wallet | Nylon Edition" href="https://www.all-ett.com/products/travel-wallet" used={false}>
						<p>
							I bought this to hold my passport, extra cash, and a backup credit card. I ended up returning it. Despite being one of the thinnest passport
							wallets on the market, I still found it to be too thick. Even worse, it had a tendency to spring open when folded, even when there wasn&rsquo;t
							much inside it. I prefer to store things in the smaller pockets of my backpack instead.
						</p>
					</GearItem>
					<GearItem name="Aer Slim Pouch" href="https://aersf.com/products/slim-pouch" used={false}>
						<p>
							I really like the design of this pouch, but I ended up not needing it. I originally used it to store tech items like my mouse and chargers, but I
							was able to simplify and store them all in the various pockets of my main backpack instead. It takes up less space this way, and I find it easier
							to access everything. The pouch is also available in X-Pac, but since it doesn&rsquo;t need to get wet I opted for the normal material.
						</p>
					</GearItem>
					<GearItem name="Orbitkey Hybrid Laptop Sleeve" href="https://amzn.to/3X2iGCY" used={false}>
						<p>
							I bought this to give my laptop some extra protection, especially if I needed to carry my laptop outside of my backpack on a flight. I ended up
							not using it. My backpack already offers enough protection as it is, and I prefer using a drawstring bag to carry my laptop separately instead.
							It&rsquo;s a nice product otherwise&mdash;the material feels premium and I like how it can be used as a mousepad when unfolded. It just takes up
							too much space.
						</p>
					</GearItem>
				</GearList>
				<GearList title="Tech">
					<GearItem name="MacBook Pro (16-inch, 2019)" href="https://www.apple.com/macbook-pro/">
						<p>
							I love this machine. I upgraded from the 2012 version and plan to upgrade again in a generation or two. Unfortunately, after 2019, MacBook Pros
							took a step backwards in terms of bulkiness, but there are rumors the next model will be significantly thinner. In general, I stick to Apple
							products whenever possible; Apple&rsquo;s locked-in ecosystem gets a lot of flak, but in reality it offers a lot of convenience.
						</p>
					</GearItem>
					<GearItem name="Apple Magic Mouse" href="https://amzn.to/3Yp78dY">
						<p>
							A lot of people complain about this mouse but I&rsquo;ve had it for over a decade and I love it. It&rsquo;s relatively flat which makes it easy to
							pack, and I&rsquo;ve never had a problem with its ergonomics. I still have the original version that runs on AA batteries, but plan on upgrading
							to a USB-C version as soon as they make one available.
						</p>
					</GearItem>
					<GearItem name="iPhone 13" href="https://www.apple.com/iphone/">
						<p>
							Just about all my other tech is made by Apple. So is my phone. I have the normal version since I don&rsquo;t take enough photos to justify
							upgrading to the Pro.
						</p>
					</GearItem>
					<GearItem name="Kindle Paperwhite" href="https://amzn.to/3Mbpzvn">
						<p>
							I love reading, but books take up a lot of space, and I&rsquo;m not a fan of the Kindle app on my phone. The Kindle is pretty lightweight and the
							new versions charge with USB-C.
						</p>
					</GearItem>
					<GearItem name="MOGICS Super Bagel" href="https://amzn.to/3WjbYH9">
						<p>
							Despite MOGICS&rsquo;s crude-looking <a class="underline" href="https://www.mogics.com" target="_blank" rel="noopener noreferrer">website</a>,
							this product is amazing. The extension cord comes in handy at hotels and coffee shops with hard-to-reach outlets, and the international adapter is
							as compact as they come. The bagel shape seems gimmicky at first but turns out to be the ideal form factor: it fits easily into a pocket, and the
							rounded shape prevents large plugs from colliding. I only wish they offered an upgraded version with a braided cable.
						</p>
					</GearItem>
					<GearItem name="Anker Nano 3 Charger (30W)" href="https://amzn.to/3M4vlPz">
						<p>
							This is basically a smaller, lighter, and more powerful version of Apple&rsquo;s standard 20W USB-C power adapter, at about the same price. I use
							the official Apple versions of all my other chargers and cables, except for this one.
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
							AirPods have good audio quality for their small size, and the noise cancellation comes in handy when trying to sleep on a long flight. I have the
							version that charges with a Lightning cable, but will eventually upgrade to USB-C so I only have to carry one type of cable.
						</p>
					</GearItem>
					<GearItem name="Apple AirTag" href="https://amzn.to/3zTqIVz">
						<p>
							In all honesty, I only bought this because my backpack has a devoted slot for one. Hopefully I&rsquo;ll never need to use it, but I suppose if I
							do I&rsquo;ll be glad I have it.
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
					<GearItem name="Patagonia Nano Puff Jacket" href="https://www.patagonia.com/product/mens-nano-puff-insulated-jacket/84212.html">
						<p>
							Among the warmest jackets for its weight. It&rsquo;s comfortable down to about 40&deg;F, and it compresses down to a very small size. I prefer the
							version without a hood since it&rsquo;s even smaller.
						</p>
					</GearItem>
					<GearItem name="UNIQLO AIRism Crew Neck T-Shirt" href="https://www.uniqlo.com/us/en/products/E454312-000/">
						<p>
							These are hands-down my favorite t-shirts for everyday use. They&rsquo;re comfortable, cool, not too expensive, and they save space by rolling up
							to about half the size of a regular shirt. Plus, they fit really well (I&rsquo;m 6'3" and 175lb). I pack two of them.
						</p>
					</GearItem>
					<GearItem name="Outlier Ultrafine Merino Cut One T-Shirt" href="https://outlier.nyc/collections/shirts/ultrafine-merino-cut-one-t-shirt">
						<p>
							I feel like it&rsquo;s a rite of passage to pack at least one item made from merino wool. Merino wool is expensive, but it&rsquo;s comfortable and
							performs well in a variety of temperatures. It&rsquo;s also odor-resistant, so I rely on this shirt to get me through to the next laundry day. The
							cut one design from Outlier fits me perfectly. Even though it&rsquo;s expensive I think it&rsquo;s worth it.
						</p>
					</GearItem>
					<GearItem name="UNIQLO HEATTECH Crew Neck Long-Sleeve T-Shirt" href="https://www.uniqlo.com/us/en/products/E461003-000/">
						<p>
							I like to pack one long-sleeve t-shirt for cold days when I need an extra layer. I picked this one up for only $6 when I was in Japan. In general
							I prefer short sleeves, so on warmer days I just roll them up.
						</p>
					</GearItem>
					<GearItem name="Charles Tyrwhitt Denim Shirt" href="https://www.charlestyrwhitt.com/us/denim-shirt---denim-blue/CSR0964DEN.html">
						<p>
							I like having one nice shirt with me for special occasions. This shirt does need to be ironed every now and then, which is kind of annoying, but
							it&rsquo;s not as big of a deal as I was expecting. As long as I roll it up carefully it tends to avoid wrinkles.
						</p>
					</GearItem>
					<GearItem name="Lululemon ABC Slim-Fit Trouser Warpstreme" href="https://shop.lululemon.com/p/mens-trousers/ABC-Slim-Trouser-32/_/prod11500060">
						<p>
							Lululemon is typically associated with girls&rsquo; gym clothes, but it turns out they also make really nice pants for men. I like these because
							they look dressy, but they&rsquo;re about as comfortable as a pair of sweatpants. I&rsquo;m not too familiar with the other materials they come
							in, but the Warpstreme has served me well.
						</p>
					</GearItem>
					<GearItem name="Lululemon ABC Classic-Fit Short 9&quot; Warpstreme" href="https://shop.lululemon.com/p/men-shorts/ABC-Short-Classic-9/_/prod11680710">
						<p>I like Lululemon pants, so this is the shorts version of them.</p>
					</GearItem>
					<GearItem name="Comfortable Gym Shorts/Bathing Suit">
						<p>
							This is an important one. I have an old pair and I&rsquo;m not sure what brand they are, but they&rsquo;re comfortable and can be used as either
							gym shorts for working out or a bathing suit for swimming. I also wear them while doing laundry and whenever I&rsquo;ll be staying inside all day.
						</p>
					</GearItem>
					<GearItem name="Darn Tough Ultra Light No Show Sock" href="https://amzn.to/4coVbID">
						<p>
							I see these recommended a lot, and they&rsquo;re pretty nice. They&rsquo;re made of merino wool so I can get an extra few uses out of them before
							laundry day. I pack one pair, plus five pairs of generic socks. I might buy some more in the future.
						</p>
					</GearItem>
					<GearItem name="UNIQLO AIRism Boxer Briefs" href="https://www.uniqlo.com/us/en/products/E454326-000/">
						<p>
							These are great underwear. They&rsquo;re comfortable, and most importantly, they breathe. They&rsquo;re also available in low-rise and seamless
							versions, but I prefer the originals. The low-rise aren&rsquo;t as comfortable, and the seamless are a bit tighter and tend to get bunched up more
							easily. I pack six of them.
						</p>
					</GearItem>
					<GearItem name="UNIQLO HEATTECH Knitted Gloves" href="https://www.uniqlo.com/us/en/products/E459738-000/">
						<p>I like the simplicity of these gloves. They are starting to form a hole at the tip of one of the fingers, though.</p>
					</GearItem>
					<GearItem name="Vans Shoes" href="https://www.vans.com/">
						<p>
							To be clear, I&rsquo;m not recommending wearing Vans for a trip around the world. But they&rsquo;ve earned a place on this list after I ran out of
							time packing and they were the only shoes I had. They held up well, but I did spend quite a few moments drying them off with a hair dryer after
							every time it rained.
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
							I like this shaver a lot. It&rsquo;s small, lightweight, and cuts nicely without any irritation. The blade is removable and comes with multiple
							attachments so I can use it to cut body hair as well as facial. It charges with a USB cable (though not USB-C) and I&rsquo;ve been using it for
							over six months on a single charge. Replacement blades are expensive, but for me, they&rsquo;re worth the price.
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
							inside the lid.
						</p>
					</GearItem>
					<GearItem name="humangear GoToob+ (Large)" href="https://amzn.to/4dImizG">
						<p>
							I use these refillable tubes to hold my shampoo and whatnot. I like that they&rsquo;re the maximum size allowed on an airplane, and they&rsquo;re
							made from a material that feels really good in the hand. I don&rsquo;t think I would buy this brand again, though. They&rsquo;re too expensive,
							and their teardrop shape makes them awkward to pack.
						</p>
					</GearItem>
				</GearList>
				<GearList title="Miscellaneous">
					<GearItem name="Tesla Lusk Wallet">
						<p>
							I really like this wallet, but unfortunately it&rsquo;s no longer available. In fact, I can barely find a trace of it on the internet. I bought it
							on Tesla&rsquo;s website back in 2016 and I&rsquo;ve been using it since.
						</p>
						<dl class="space-y-4 pl-5">
							<GearItem
								name="American Express Green Card"
								href="https://americanexpress.com/en-us/referral/american-express-green-card?ref=JAMESRBm3K&XL=MIANS"
								inner={true}
							>
								<p>
									I&rsquo;m not a fan of the coupon book nature of some of American Express&rsquo;s higher end travel cards, but I like the Green Card for its
									simplicity. It has an annual fee but offers a high sign up bonus that makes up for it. I already use American Express for my main bank
									account, and they have by far the best mobile app and customer service of any bank I&rsquo;ve tested, so I try to stay within their ecosystem
									as much as possible.
								</p>
							</GearItem>
							<GearItem name="Robinhood Gold Card" href="https://robinhood.com/creditcard?referral_code=f12a49b3" inner={true}>
								<p>
									This card is new and I&rsquo;m still on the waitlist for it, but it gives 3% cash back in all categories, with no foreign transaction fees.
									Assuming it lasts, I&rsquo;ll consider making it my main credit card. (Disclaimer: If you sign up with my link I&rsquo;ll get off the waitlist
									faster.)
								</p>
							</GearItem>
							<GearItem name="Charles Schwab Debit Card" href="https://www.schwab.com/checking/debit-card" inner={true}>
								<p>
									Charles Schwab has the only debit card I know of that offers unlimited international ATM fee reimbursements. This means I can withdraw money
									from any ATM in the world for free. I cannot overstate how useful this is when staying in a cash-based foreign country.
								</p>
							</GearItem>
						</dl>
					</GearItem>
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
							these for years and they&rsquo;re still holding up. They came with a carrying case, and to save space, I use it to hold my Philips OneBlade razor
							as well as the glasses.
						</p>
					</GearItem>
					<GearItem name="Matador Ultralight Travel Towel (Large)" href="https://www.matadorequipment.com/products/ultralight-travel-towel-large">
						<p>
							According to The Hitchhiker&rsquo;s Guide to the Galaxy, a towel &ldquo;is about the most massively useful thing an interstellar hitchhiker can
							have.&rdquo; This towel is by no means the softest or most absorbent, but it takes up hardly any space. Usually I use the towels available in
							hotels or Airbnbs, but if they&rsquo;re not available or if I&rsquo;m staying with a friend, this towel comes in handy. It also works as a beach
							towel.
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
							I&rsquo;ve tried many different types of pens, including fancy ones, and this one remains my favorite. It comes in handy for filling out customs
							and immigration forms.
						</p>
					</GearItem>
					<GearItem name="Plastic Yellow Spork">
						<p>
							I ordered food somewhere in Taiwan and it came with a plastic yellow spork. It was good quality so I ended up rinsing it off and taking it with me
							when I finished eating. Sometimes it&rsquo;s more fun to scavenge items on the go than to bring them from home.
						</p>
					</GearItem>
				</GearList>
			</div>
		</article>
	</div>
</main>
