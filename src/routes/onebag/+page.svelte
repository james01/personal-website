<script lang="ts">
	import profile from '$lib/assets/profile.jpg';
	import FlatLayGallery from './FlatLayGallery.svelte';
	import GearItem from './GearItem.svelte';
	import GearList from './GearList.svelte';

	const title = 'Onebag Travel';
</script>

{#snippet link(text: string, href: string)}
	<a class="underline" {href} target="_blank" rel="noopener noreferrer">{text}</a>
{/snippet}

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="This is everything I pack when traveling around the world." />
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
					Last updated on <time datetime="2026-04-09">April 9, 2026</time>
				</p>
			</header>
			<div class="body-text mt-5">
				<p>
					Since 2024 I&rsquo;ve been spending a lot of time traveling around the world with just a backpack. This is
					often referred to as &ldquo;onebagging.&rdquo;
				</p>
				<p>
					The more I&rsquo;ve been exposed to this type of travel the more I&rsquo;ve recognized that there&rsquo;s an
					art to it. I put together this list to keep track of everything I pack and the thought process behind it. It
					evolves with time.
				</p>
				<p>
					Fully packed, my bag weighs about 7kg (15.4lbs). This means it counts as a personal item on almost any flight
					in the world, and I dodge all the extra expenses when buying a ticket. The bag goes under the seat in front of
					me and I&rsquo;m good to go&mdash;no worrying about baggage carousels or running out of space in the overhead
					bins. It&rsquo;s a freeing feeling.
				</p>
				<p>
					As a disclaimer, some of the links here are affiliate links. That means I make a small percentage of the sale
					if you click one and buy something (it doesn&rsquo;t cost you anything extra). If you found this list helpful,
					consider supporting me by buying something through one of the links.
				</p>
			</div>
			<div class="-mx-5 mt-10 lg:-mx-24">
				<FlatLayGallery />
			</div>
			<hr class="mt-10 border-gray-200 dark:border-gray-700" />
			<div class="mt-10 space-y-16">
				<GearList title="Storage">
					<GearItem name="Almond Oak Expandable Travel Backpack" href="https://almondoak.com/products/travelbag">
						<p>
							Almond Oak is a one-man company that makes the closest I&rsquo;ve found to the perfect travel backpack.
						</p>
						<p>
							It&rsquo;s extremely lightweight (855g / 1.86lbs) and small enough to be used as a personal item on
							flights. It expands to 30L, which I think is the ideal size for onebag travel, but I like how it can drop
							to 25L for use as a daypack.
						</p>
						<p>
							I like how the main compartment opens clamshell-style like a suitcase, with the hinge on the long side of
							the pack. This uses less zipper (saves weight) and is more convenient to lay flat than if the hinge were
							on the short side. I also like that there&rsquo;s a mesh pocket in the main compartment that removes the
							need for a packing cube.
						</p>
						<p>
							I like how the laptop compartment has a false bottom, is accessed from the top, and doesn&rsquo;t use
							Velcro (which is too loud). I like that the bag has basic organization for chargers and cables and
							whatnot, as well as a hidden pocket for a passport.
						</p>
						<p>
							I like that the top handle is slim enough to hang on a hook (like in a restroom stall) and that the back
							panel doesn&rsquo;t cause my shirts to pill. I like that the zippers are easy to open (which isn&rsquo;t
							usually the case with waterproof zippers) and that they&rsquo;re made of Hypalon, which is lightweight and
							doesn&rsquo;t jingle.
						</p>
						<p>
							I like that it doesn&rsquo;t have a hip belt or load lifters, and that the sternum strap is removable. The
							backpack isn&rsquo;t overengineered and doesn&rsquo;t include any features that aren&rsquo;t necessary.
						</p>
						<p>
							Aside from the positives, there are two things I wish could be improved. For one, the passport pocket is a
							little tight. I wish the opening were half an inch longer. And second, I wish inside the front compartment
							there were two zippered pockets instead of just one with a divider. This would make it easier to get
							things into and out of it.
						</p>
					</GearItem>
					<GearItem name="Osprey Daylite Hanging Toiletry Kit" href="https://amzn.to/3PVCUgA">
						<p>
							I&rsquo;m a big fan of hanging toiletry kits. This one folds open and has a strap that can hang from
							something like a towel bar. Some toiletry kits hang with a hook, but a strap is more versatile and less
							likely to drop.
						</p>
						<p>
							This kit is lightweight with a sensible amount of organization. There are three zippered compartments: a
							spacious main one, and two smaller ones for things like nail clippers and lip balm. There are also two
							mesh pockets, one of which I use to hold my toothbrush.
						</p>
					</GearItem>
					<GearItem
						name="Nanobag Pack & Nanobag Tote Bag"
						href="https://www.amazon.com/dp/B0D5J67PCP?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2FNUWA61SVYGS&linkCode=tr1&tag=jamesrandolph-20&linkId=amzn1.campaign.2FNUWA61SVYGS_1775753708284"
					>
						<p>
							As the name suggests, Nanobag makes extremely lightweight bags that are small enough to fit in your
							pocket. They sell a few different types of bags but they&rsquo;re all made from the same thin material,
							which is surprisingly strong. I take two with me. One is a drawstring bag I use as a daypack. The other is
							a tote bag I use for grocery shopping.
						</p>
					</GearItem>
					<GearItem name="Ziploc Bag (to hold my passport)" href="https://amzn.to/4dJyctc">
						<p>
							I&rsquo;ve experimented with passport wallets, but ultimately I think a Ziploc bag is superior. It&rsquo;s
							cheap, extremely lightweight, waterproof, and transparent so I can easily see what&rsquo;s inside.
						</p>
					</GearItem>
					<GearItem name="Osprey Farpoint 55L Backpack" href="https://amzn.to/4cotSyj" used={false}>
						<p>
							This is the very first backpack I bought when planning my packing list. I originally liked it because it
							has a detachable daypack and shoulder straps that stow away when checked in as luggage. Neither of these
							things are necessary if you just use a smaller bag to begin with.
						</p>
					</GearItem>
					<GearItem name="Aer Travel Pack 3 X-Pac" href="https://aersf.com/products/travel-pack-3-x-pac" used={false}>
						<p>
							Aer makes cool stuff but it tends to be heavy and overengineered. I like a lot of things about this
							backpack, but the weight became a dealbreaker after using it for a while.
						</p>
					</GearItem>
					<GearItem name="Aer Travel Kit 2 X-Pac" href="https://aersf.com/products/travel-kit-2-x-pac" used={false}>
						<p>
							This is a nice toiletry kit, but what I said about Aer&rsquo;s Travel Pack applies here as well:
							it&rsquo;s heavy and overengineered. I also don&rsquo;t like how the hook is too small for a lot of towel
							racks.
						</p>
					</GearItem>
					<GearItem name="Aer Packing Cube" href="https://aersf.com/products/packing-cube" used={false}>
						<p>
							Packing cubes can be really helpful, but my backpack now has a built-in mesh pocket for loose clothes. I
							use that instead and it saves weight.
						</p>
					</GearItem>
					<GearItem name="Aer City Sling 2 X-Pac" href="https://aersf.com/products/city-sling-2-x-pac" used={false}>
						<p>
							I&rsquo;m just not a fan of slings. They feel awkward to carry and can&rsquo;t really hold that much. I
							originally bought this with the goal of doubling its use as a tech pouch, but I ended up returning it.
							It&rsquo;s a well-built product but it&rsquo;s not for me.
						</p>
					</GearItem>
					<GearItem name="Aer Slim Pouch" href="https://aersf.com/products/slim-pouch-2" used={false}>
						<p>
							I really like the design of this pouch, but I ended up not needing it. I originally used it to store tech
							items like my mouse and chargers, but I was able to simplify and store them all in the various pockets of
							my main backpack instead. It takes up less space this way, and I find it easier to access everything. The
							pouch is also available in X-Pac, but since it doesn&rsquo;t need to get wet I opted for the normal
							material.
						</p>
					</GearItem>
					<GearItem
						name="Allett Travel Wallet | Nylon Edition"
						href="https://www.all-ett.com/products/travel-wallet"
						used={false}
					>
						<p>
							I bought this to hold my passport, extra cash, and a backup credit card. I ended up returning it. Despite
							being one of the thinnest passport wallets on the market, I still found it to be too thick. Even worse, it
							had a tendency to spring open when folded, even when there wasn&rsquo;t much inside it. I prefer to store
							things in the smaller pockets of my backpack instead.
						</p>
					</GearItem>
					<GearItem name="Orbitkey Hybrid Laptop Sleeve" href="https://amzn.to/3X2iGCY" used={false}>
						<p>
							I originally bought this to give my laptop some extra protection, especially if I needed to carry it loose
							on a flight. I ended up not using it. My backpack already offers enough protection as it is, and I prefer
							using a drawstring bag to carry my laptop separately instead. It&rsquo;s a nice product
							otherwise&mdash;the material feels premium and I like how it can be used as a mousepad when unfolded. It
							just takes up too much space.
						</p>
					</GearItem>
				</GearList>
				<GearList title="Tech">
					<GearItem name="MacBook Air 15-inch" href="https://www.apple.com/macbook-air">
						<p>
							I think this is the perfect laptop for the vast majority of people, even for those who think they need the
							Pro. The Air is lightweight, half the price, and super powerful. I compile code, render the occasional
							video, and work with large graphics files, and it&rsquo;s rare the computer will even get warm.
						</p>
					</GearItem>
					<GearItem name="iPhone 13" href="https://www.apple.com/iphone">
						<p>
							Just about all my other tech is made by Apple. So is my phone. I have the normal version since I
							don&rsquo;t take enough photos to justify upgrading to the Pro.
						</p>
					</GearItem>
					<GearItem name="Kindle Paperwhite" href="https://amzn.to/4caMvaZ">
						<p>
							I love reading, but books take up a lot of space, and I&rsquo;m not a fan of the Kindle app on my phone.
							The Kindle is pretty lightweight and charges with USB-C.
						</p>
					</GearItem>
					<GearItem name="EPICKA Air 40W Universal Travel Adapter" href="https://amzn.to/4tsbwFk">
						<p>
							If you don&rsquo;t need to worry about grounding, there are four main plug types used around the world:
							type A (Americas), type C (Europe), type G (UK), and type I (Australia, China).
						</p>
						<p>
							Universal adapters come with all four types built right into them. I&rsquo;ve tried a few universal
							adapters with varying degrees of success:
						</p>
						<ul>
							<li>
								The {@render link('Road Warrior Universal Travel Plug Adapter', 'https://amzn.to/41Se0kD')} has a lightweight
								design but gets annoying having to assemble it every time it&rsquo;s used. I&rsquo;m also not a fan of how
								it uses the same pins for plug types C and G.
							</li>
							<li>
								The {@render link('Mogics Super Bagel', 'https://amzn.to/41lot83')} is great as a power strip, but the adapter
								is awkward and fiddly to operate. The pins can be stiff to slide out, and it also uses the same pins for plug
								types C and G.
							</li>
							<li>
								The {@render link('Epicka Air 40W Universal Travel Adapter', 'https://amzn.to/4tsbwFk')} is on the bulkier
								side, but the plugs are sturdy and easy to pop out. It also doubles as a 40W charger.
							</li>
							<li>
								The {@render link('Anker Nano Travel Adapter', 'https://amzn.to/4e4lcl6')} is very similar to the Epicka adapter,
								but slightly flimsier and with only 20W of power output.
							</li>
						</ul>
						<p>
							Between the four I&rsquo;ve tested, I like the Epicka adapter the best. It&rsquo;s bulkier than others but
							doubles as a 40W charger, with three USB-C ports and one USB-A. That&rsquo;s enough to fast charge
							everything I need, except for my MacBook Air, which it charges at a normal speed (but that&rsquo;s a fair
							tradeoff for the weight it saves).
						</p>
					</GearItem>
					<GearItem
						name="mophie powerstation mini"
						href="https://www.apple.com/shop/product/HQ3B2ZM/A/mophie-powerstation-mini"
					>
						<p>
							I&rsquo;m not loyal to any specific power bank, as long as it&rsquo;s small and uses USB-C. This one
							checks both boxes. I think 5,000mAh is a good capacity. It&rsquo;s just enough to prevent my phone from
							dying at a bad moment, and no bulkier.
						</p>
					</GearItem>
					<GearItem name="Apple AirPods Pro" href="https://amzn.to/48nPBXV">
						<p>
							AirPods have good audio quality for their small size, and the noise cancellation comes in handy when
							trying to sleep on a long flight. I have the version that charges with a Lightning cable, but I&rsquo;ll
							eventually upgrade to USB-C so I only have to carry one type of cable.
						</p>
					</GearItem>
					<GearItem name="Apple Magic Mouse" href="https://amzn.to/48gfp8k" used={false}>
						<p>
							I&rsquo;ve recently been using the trackpad more and more, and it turns out I actually prefer it to using
							a mouse. Best of all, it&rsquo;s one less thing to carry.
						</p>
					</GearItem>
					<GearItem name="Apple Watch" href="https://www.apple.com/watch" used={false}>
						<p>
							At the end of the day I&rsquo;m just not a watch person. I thought I&rsquo;d use this to track my exercise
							and help with directions, but I end up just leaving it in my backpack. It&rsquo;s a cool gadget but
							it&rsquo;s another thing to carry around and worry about charging.
						</p>
					</GearItem>
					<GearItem name="Apple AirTag" href="https://amzn.to/4cvHYRF" used={false}>
						<p>
							I used to bring an AirTag when my backpack had a devoted slot for one, but in my new bag there&rsquo;s
							nowhere to put it. An AirTag can be handy in a luggage mix-up, but my bag fits under the seat now so the
							chance of this is slim.
						</p>
					</GearItem>
				</GearList>
				<GearList title="Clothing">
					<GearItem
						name="Patagonia Nano Puff Jacket"
						href="https://www.patagonia.com/product/mens-nano-puff-insulated-jacket/84213.html"
					>
						<p>
							One of the warmest jackets for its weight. It&rsquo;s comfortable down to about 40&deg;F, and it
							compresses down to a very small size. I prefer the version without a hood since it&rsquo;s even smaller.
						</p>
					</GearItem>
					<GearItem
						name="Unbound Merino Compact Travel Hoodie"
						href="https://unboundmerino.com/products/compact-travel-hoodie"
					>
						<p>
							Nice and comfortable hoodie that&rsquo;s made of merino wool so it can go longer between washes. It looks
							good as a standalone jacket but can also be used as a layer beneath a thicker coat. The zipper is on the
							left side of the jacket, which is different from what I&rsquo;m used to, but that&rsquo;s not a
							dealbreaker.
						</p>
					</GearItem>
					<GearItem
						name="Outlier Ultrafine Merino Cut One T-Shirt"
						href="https://outlier.nyc/collections/shirts/ultrafine-merino-cut-one-t-shirt"
					>
						<p>
							It&rsquo;s a rite of passage to have at least one shirt made of merino wool. Merino wool is expensive, but
							it&rsquo;s odor-resistant, so I rely on this shirt to get me through to the next laundry day. Also,
							Outlier&rsquo;s cut one design fits me perfectly. I pack one of these shirts.
						</p>
					</GearItem>
					<GearItem
						name="Cuts Clothing AO Curve-Hem Tee"
						href="https://www.cutsclothing.com/products/black-crew-curve-hem"
					>
						<p>
							I&rsquo;ve been buying the majority of my shirts from Cuts Clothing lately. I&rsquo;m tall so I appreciate
							the extra length, and I like the variety of colors they have available. The shirts are made of cotton,
							polyester, and spandex, and they have an anti-odor treatment that embeds silver particles in the fabric.
							It seems to work, as I&rsquo;ve worn these shirts for several days in a row without issue. I pack three of
							them.
						</p>
					</GearItem>
					<GearItem
						name="Lululemon ABC Slim-Fit Trouser Warpstreme"
						href="https://shop.lululemon.com/p/mens-trousers/ABC-Slim-Trouser-32/_/prod11500060"
					>
						<p>
							Lululemon is known for yoga pants, but they make everyday pants, too. I like these because they look
							dressy but feel like sweatpants. I&rsquo;m not too familiar with the other materials they come in, but the
							Warpstreme has served me well.
						</p>
					</GearItem>
					<GearItem name="Comfortable Gym Shorts/Bathing Suit">
						This is an important one. I have an old pair and I&rsquo;m not sure what brand they are, but they&rsquo;re
						comfortable and can be used as either gym shorts for working out or a bathing suit for swimming. I also wear
						them while doing laundry and whenever I&rsquo;ll be staying inside all day.
					</GearItem>
					<GearItem name="Darn Tough Ultra Light No Show Sock" href="https://amzn.to/4coVbID">
						<p>
							I see these recommended a lot, and they&rsquo;re pretty nice. They&rsquo;re made of merino wool so I can
							get a few uses out of them before laundry day. They&rsquo;re pretty durable and Darn Tough guarantees them
							for life&mdash;this means they&rsquo;ll replace them for free if they develop a hole. I pack four of them.
						</p>
					</GearItem>
					<GearItem name="UNIQLO AIRism Boxer Briefs" href="https://www.uniqlo.com/us/en/products/E454326-000">
						<p>
							These are great underwear. They&rsquo;re comfortable, lightweight, and very breathable. They&rsquo;re also
							available in low-rise and seamless versions, but I prefer the originals. The low-rise aren&rsquo;t as
							comfortable, and the seamless are a bit tighter and tend to get bunched up more easily. I pack seven of
							them.
						</p>
					</GearItem>
					<GearItem name="UNIQLO HEATTECH Ribbed Beanie" href="https://www.uniqlo.com/us/en/products/E478303-000">
						<p>
							Any hat will do. This one from Uniqlo is cheap and warm. I&rsquo;m a fan of hats in cold weather; they
							have a great weight-to-warmth ratio.
						</p>
					</GearItem>
					<GearItem name="UNIQLO HEATTECH Knitted Gloves" href="https://www.uniqlo.com/us/en/products/E478319-000">
						<p>
							I like the simplicity of these gloves. They are starting to form a hole at the tip of one of the fingers,
							though.
						</p>
					</GearItem>
					<GearItem
						name="Nike Pegasus Trail Running Shoes"
						href="https://www.nike.com/t/pegasus-trail-5-mens-trail-running-shoes-0ZrZ4D/DV3864-002"
					>
						<p>
							I&rsquo;m still trying to find a pair of shoes that are comfortable, look good, and are sturdy enough to
							take on a hike now and then. Trail runners are functional but I don&rsquo;t think they look the best,
							especially after getting a little dirty.
						</p>
					</GearItem>
					<GearItem
						name="UNIQLO Cotton Boxer Briefs"
						href="https://www.uniqlo.com/us/en/products/E464311-000"
						used={false}
					>
						<p>
							They&rsquo;re fine when it&rsquo;s cold out, but not when it&rsquo;s humid and 100&deg;F and you&rsquo;ve
							been walking for two hours and the last time you showered was on Monday. I think the same would apply to
							any brand of cotton underwear.
						</p>
					</GearItem>
				</GearList>
				<GearList title="Toiletries">
					{#snippet intro()}
						<p>
							Aside from what&rsquo;s listed here, most of my toiletries are generic. I restock at grocery stores
							whenever I find a section of travel-size products.
						</p>
					{/snippet}
					<GearItem name="Philips OneBlade" href="https://amzn.to/3WtJn27">
						<p>
							I like this shaver a lot. It&rsquo;s small, lightweight, and cuts nicely without any irritation. The blade
							is removable and comes with multiple attachments so I can use it to cut body hair as well as facial hair.
							It charges with an included USB cable (not USB-C) and the battery lasts many months between charges.
							Replacement blades are expensive, but for me, they&rsquo;re worth the price.
						</p>
					</GearItem>
					<GearItem name="Yinke 5V USB-C Shaver Adapter" href="https://amzn.to/4sUy2Hq">
						<p>
							This little adapter lets me charge my Philips OneBlade with a USB-C cable. It saves me from carrying a
							special charging wire just for shaving.
						</p>
					</GearItem>
					<GearItem name="Round Foldable Hairbrush (with Mirror)" href="https://amzn.to/3WIKiwQ">
						<p>
							Unironically this might be one of my best purchases. It&rsquo;s cheap in both price and quality, but the
							design is perfect for traveling. The bristles collapse into themselves and the whole thing folds in half,
							so it fits nicely into the pocket of a toiletry kit. Plus, there&rsquo;s a mirror inside the lid.
						</p>
					</GearItem>
					<GearItem name="L3 Level 3 Styling Powder" href="https://amzn.to/41dXoDQ">
						<p>
							This is like hair clay but in powdered form, so it&rsquo;s lighter weight and easier to apply. I sprinkle
							some into my hair whenever I need to, often right after I wake up if I don&rsquo;t have time to shower.
						</p>
					</GearItem>
					<GearItem name="Victorinox Nail Clipper" href="https://amzn.to/4v4eYYn">
						<p>A tiny and well-built nail clipper, made by the same company behind the Swiss Army Knife.</p>
					</GearItem>
					<GearItem name="Uncle Bill&rsquo;s Sliver Gripper" href="https://amzn.to/3PZJv9P">
						<p>
							A compact pair of tweezers. They come with a cover so the pointy end won&rsquo;t poke a hole through my
							bag.
						</p>
					</GearItem>
					<GearItem name="CANARY Mini Travel Scissors" href="https://amzn.to/4s7nByE">
						<p>
							I&rsquo;ve tried out a few pairs of travel scissors and these are my favorites. They&rsquo;re quite
							charming&mdash;people laugh when I take them out. They&rsquo;re super tiny but they&rsquo;re sturdy enough
							to cut through plastics and that sort of thing. I mostly use them to cut pieces of hydrocolloid tape.
						</p>
					</GearItem>
					<GearItem
						name="Hydrocolloid Tape"
						href="https://www.amazon.com/dp/B0FKHNXNHC?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.ONUR86YO0QRY&linkCode=tr1&tag=jamesrandolph-20&linkId=amzn1.campaign.ONUR86YO0QRY_1775753456195"
					>
						<p>
							A roll of hydrocolloid tape is super versatile and takes up very little space. Pieces can be cut to size
							and used as bandages, blister pads, or pimple patches. I keep the roll wrapped up with a rubber band.
						</p>
					</GearItem>
					<GearItem name="humangear GoToob+ (Large)" href="https://amzn.to/4dImizG">
						<p>
							I use these refillable tubes to hold shampoo and whatnot. They&rsquo;re the maximum size allowed on an
							airplane, and they&rsquo;re made from a material that feels really good in the hand. I don&rsquo;t think I
							would buy this brand again, though. They&rsquo;re too expensive, and the teardrop shape is awkward to
							pack.
						</p>
					</GearItem>
					<GearItem name="CRYSTAL Mineral Deodorant" href="https://amzn.to/41kHHL3" used={false}>
						<p>
							I really like the idea of this stuff&mdash;it&rsquo;s natural, small, and lasts forever&mdash;but
							it&rsquo;s more annoying to apply than regular deodorant and not always as effective. After using it for a
							while I switched back to full-size sticks of regular deodorant (travel-size sticks are nice but they
							don&rsquo;t last so long, and there&rsquo;s less variety).
						</p>
					</GearItem>
				</GearList>
				<GearList title="Miscellaneous">
					<GearItem name="Tesla Lusk Wallet">
						<p>
							I really like this wallet, but unfortunately it&rsquo;s no longer available. In fact, I can barely find a
							trace of it on the internet. I bought it on Tesla&rsquo;s website back in 2016 and I&rsquo;ve been using
							it since.
						</p>
						<dl class="space-y-4 pl-5">
							<GearItem
								name="American Express Green Card"
								href="https://americanexpress.com/en-us/referral/american-express-green-card?ref=JAMESRBm3K&XL=MIANS"
								inner={true}
							>
								<p>
									Good travel benefits if you like points. American Express has one of the best mobile apps I&rsquo;ve
									ever used.
								</p>
							</GearItem>
							<GearItem
								name="Fidelity Credit Card"
								href="https://www.fidelity.com/go/visa-signature-rewards-1502"
								inner={true}
							>
								<p>
									Not flashy but a great travel card if you like cash back. No annual fee, no foreign transaction fees,
									unlimited 2% cash back, and free Global Entry or TSA PreCheck.
								</p>
							</GearItem>
							<GearItem
								name="Fidelity Debit Card"
								href="https://www.fidelity.com/spend-save/atm-debit-card"
								inner={true}
							>
								<p>
									Fidelity and Charles Schwab have the only debit cards I know of that offer unlimited international ATM
									fee reimbursements. This means whatever fees an ATM charges will be credited a few days later back to
									your account&mdash;super useful when staying in a cash-based foreign country. I&rsquo;ve used Charles
									Schwab in the past but the whole experience was a bit clunky; I prefer Fidelity.
								</p>
							</GearItem>
						</dl>
					</GearItem>
					<GearItem
						name="Cheap Sunglasses from Amazon"
						href="https://www.amazon.com/dp/B0D83PV6GP?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1D5DCK695HE6Y&linkCode=tr1&tag=jamesrandolph-20&linkId=amzn1.campaign.1D5DCK695HE6Y_1775753760364"
					>
						<p>
							Especially while traveling, it&rsquo;s so easy to destroy a pair of sunglasses that I prefer to buy cheap
							ones off Amazon. Even so, I&rsquo;ve had pairs for years that are still holding up. One of them came with
							a carrying case, and to save space, I use it to hold my Philips OneBlade razor as well as the glasses.
						</p>
					</GearItem>
					<GearItem
						name="Matador Ultralight Travel Towel (Large)"
						href="https://www.matadorequipment.com/products/ultralight-travel-towel-large"
					>
						<p>
							According to The Hitchhiker&rsquo;s Guide to the Galaxy, a towel &ldquo;is about the most massively useful
							thing an interstellar hitchhiker can have.&rdquo; This towel is by no means the softest or most absorbent,
							but it takes up hardly any space. Usually I use the towels provided in hotels or Airbnbs, but if
							they&rsquo;re not available or if I&rsquo;m staying with a friend, this towel comes in handy. It also
							works as a beach towel.
						</p>
					</GearItem>
					<GearItem
						name="UNIQLO UV Protection Compact Umbrella"
						href="https://www.uniqlo.com/us/en/products/E433776-000/"
					>
						<p>
							I&rsquo;m a big fan of using an umbrella for sun protection instead of wearing a hat or
							sunscreen&mdash;especially for walking short distances between buildings. Plus, an umbrella doubles as
							rain protection, so I don&rsquo;t need to carry a rain jacket.
						</p>
					</GearItem>
					<GearItem name="BIC Cristal Pen" href="https://amzn.to/4cbbA3u" used={false}>
						<p>
							I&rsquo;ve tried many different types of pens, including fancy ones, and this one remains my favorite.
							However, in an effort to save 2.7 grams, I decided I don&rsquo;t use it enough to be worth carrying
							around.
						</p>
					</GearItem>
					<GearItem name="Vapur Collapsible Bottle" href="https://amzn.to/4dhCZSs" used={false}>
						<p>
							It&rsquo;s not the best but this is the closest I&rsquo;ve found to an ideal travel bottle. It packs flat
							and stands up on its own, but likes to grow mold and cut my finger when I open its weirdly designed cap.
						</p>
						<p>
							I don&rsquo;t carry reusable bottles at all anymore, though. If I really need one I&rsquo;ll just buy a
							plastic bottle and refill it. Many countries don&rsquo;t have drinkable tap water anyway, so buying
							plastic bottles is the only option.
						</p>
					</GearItem>
				</GearList>
			</div>
		</article>
	</div>
</main>
