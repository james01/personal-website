<script lang="ts">
	import profile from '$lib/assets/profile.jpg';
	import uiswitch_mp4 from '$lib/assets/tg-contest-2025/uiswitch.mp4';
	import metaballs_png from '$lib/assets/tg-contest-2025/metaballs.png';
	import uiswitch_png from '$lib/assets/tg-contest-2025/uiswitch.png';
	import uiswitch_copy_png from '$lib/assets/tg-contest-2025/uiswitch_copy.png';
	import metaballs_color_png from '$lib/assets/tg-contest-2025/metaballs_color.png';
	import tab_bars_png from '$lib/assets/tg-contest-2025/tab_bars.png';

	const title = 'Backporting Liquid Glass';
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="I backported Liquid Glass for a Telegram Contest. Here&rsquo;s how I did it."
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
					Published on <time datetime="2026-1-6">January 6, 2026</time>
				</p>
			</header>
			<div class="body-text mt-5">
				<p>
					Telegram recently hosted a <a
						class="underline"
						href="https://t.me/contest/436"
						target="_blank"
						rel="noopener noreferrer">contest</a
					>
					to backport Liquid Glass to earlier versions of iOS. Having just shipped the first version
					of an
					<a
						class="underline"
						href="https://apple.co/4pAf72d"
						target="_blank"
						rel="noopener noreferrer">app</a
					> I&rsquo;d been working on, I had the opportunity to develop a solution.
				</p>
				<p>
					The deadline was the day after Christmas, which made for a tight timeline, but overall
					I&rsquo;m quite happy with the result.
				</p>
				<p>
					I&rsquo;ll go over some of the more interesting parts of the implementation below, but you
					can check out the full <a
						class="underline"
						href="https://github.com/james01/Telegram-iOS"
						target="_blank"
						rel="noopener noreferrer">code</a
					> on Github.
				</p>
			</div>
			<div class="mt-10">
				<video
					class="w-full"
					src={uiswitch_mp4}
					autoplay
					muted
					loop
					playsinline
					width="398"
					height="270"
				></video>
			</div>
			<h2 class="mt-8 text-2xl font-bold">The Problem</h2>
			<div class="body-text mt-4">
				<p>
					The challenge was to create custom implementations of several UI elements that mimicked
					the Liquid Glass effect of iOS 26, and worked all the way back to iOS 13. In addition to
					aesthetic accuracy and appeal, submissions would be evaluated on performance, memory
					consumption, and battery impact.
				</p>
				<p>
					This last point presented a problem because, while the Liquid Glass effect can be
					implemented as a Metal shader, there&rsquo;s no supported way to apply a shader directly
					to a UIView (outside of SwiftUI-only APIs introduced in iOS 17).
				</p>
				<p>
					One possible workaround is to drive the effect using a CADisplayLink, where, on every
					frame, we snapshot the view hierarchy and apply a shader to the resulting image. While
					technically possible, though, this approach puts significant stress on the CPU and is far
					less efficient than effects that integrate directly with Core Animation&rsquo;s render
					pass.
				</p>
				<p>
					Because of this I decided not to use Metal shaders at all. This seemed to be the right
					choice, but if other contestants got them to work efficiently, I&rsquo;d be very curious
					to know how they did it.
				</p>
			</div>
			<h2 class="mt-8 text-2xl font-bold">Taking Inspiration from Metaballs</h2>
			<div class="body-text mt-4">
				<p>
					I decided instead to approximate the Liquid Glass effect by taking inspiration from a
					technique for making <a
						class="underline"
						href="https://en.wikipedia.org/wiki/Metaballs"
						target="_blank"
						rel="noopener noreferrer">metaballs</a
					>. While not as visually accurate as a shader-based approach, this method is far more
					efficient, which I think is a worthy tradeoff given the constraints of the contest.
				</p>
				<p>Here&rsquo;s how it works:</p>
			</div>
			<div class="-mx-5 mt-10 sm:mx-0 lg:-mx-24">
				<img class="w-full" src={metaballs_png} alt="" width="1920" height="480" />
			</div>
			<div class="body-text mt-10">
				<p>
					In this simple example we see how the effect creates a smooth, liquid-like appearance, as
					if the circles (or metaballs) were merging together. We&rsquo;ll adapt this technique to
					mimic the distortion effect of Liquid Glass, but first we must implement the technique
					itself. For that we turn to the arcane magic of CAFilter.
				</p>
				<p>
					CAFilter is a powerful but private API used for applying filters to Core Animation layers.
					Every UIView is backed by a CALayer, so it works out of the box with UIKit. And unlike
					custom shaders, CAFilters are applied directly to the render pipeline, making them very
					efficient.
				</p>
				<p>
					The only issue is that, because CAFilter is a private API, there&rsquo;s no official
					documentation on how to use it, making it a bit of a black box to work with. Officially,
					private APIs are not allowed in apps submitted to the App Store. However, the contest
					explicitly allows their use, and Telegram already uses them in other parts of the app, so
					I considered it reasonable to incorporate them into my solution.
				</p>
				<p>
					<a
						class="underline"
						href="https://github.com/quentinfasquel/CAFilterBuiltins/blob/main/Sources/CAFilterBuiltins/CAFilterBuiltins.swift"
						target="_blank"
						rel="noopener noreferrer">This</a
					> Github repository provides a great starting point for seeing the types of CAFilters available.
					If we look closely, two stand out as being particularly useful.
				</p>
				<p>
					First is the Gaussian blur filter. This one is straightforward to understand, as it just
					blurs the layer it&rsquo;s applied to. It accepts a number of parameters, but the most
					important is inputRadius, which controls the amount of blur. The blur filter is a commonly
					used CAFilter and Telegram already has helper methods for creating it.
				</p>
				<p>
					The second is the alpha threshold filter. This filter is much lesser known; in fact, I
					haven&rsquo;t even seen it mentioned anywhere before. It works by making pixels
					transparent if their alpha value is below a certain threshold, or opaque if above it. A
					parameter called inputAmount determines this threshold, and another called inputColor
					determines the color when pixels are opaque.
				</p>
				<p>
					Basically, the Gaussian blur softens the edges of the views, and the alpha threshold
					sharpens them back up. And if we set the threshold to 0.5, nonoverlapping edges will be
					identical to how they appeared before the filter was applied. This means a metaball on its
					own appears as an unaffected circle.
				</p>
				<p>
					All we have to do now is assign these filters to a container layer, configure their
					properties, and all sublayers (and subviews) will be rendered with the effect. And because
					this work is GPU-accelerated, it remains snappy and efficient when animated.
				</p>
			</div>
			<h2 class="mt-8 text-2xl font-bold">Making a UISwitch</h2>
			<div class="body-text mt-4">
				<p>
					With the metaball effect in place, we can adapt it to UI elements. We&rsquo;ll start with
					a simple one: a UISwitch.
				</p>
				<p>
					I&rsquo;ll go over each step in detail, but I&rsquo;ll start by showing an overview of the
					whole process:
				</p>
			</div>
			<div class="-mx-5 mt-10 sm:mx-0 lg:-mx-24">
				<img class="w-full" src={uiswitch_png} alt="" width="1920" height="480" />
			</div>
			<div class="body-text mt-10">
				<p>
					The first few steps should look familiar, but notice the shapes are now different. Instead
					of two circles we use two pill shapes: one that&rsquo;s filled in, and another
					that&rsquo;s just an outline. These are labeled 1 and 2 in the diagram, respectively.
				</p>
				<p>
					These pill shapes are added to a container view, labeled 3, that clips its content into
					yet another pill shape. We apply the blur and alpha threshold filters to this container
					view.
				</p>
				<p>
					The alpha threshold produces a shape with sharp edges, so in the next step we make them a
					bit softer. To do this we add a third filter to the container view, called a variable
					blur.
				</p>
				<p>
					The variable blur is a lot like the blur we&rsquo;re already familiar with. It accepts a
					parameter called inputRadius that determines the amount of blur, but it also accepts a
					parameter called inputMaskImage. The alpha channel of this image determines how much blur
					to apply at each pixel: opaque pixels are fully blurred, and transparent pixels
					aren&rsquo;t blurred at all. For the switch, we apply a mask image that is black (blurred)
					towards the edges and transparent (not blurred) towards the middle.
				</p>
				<p>
					The next step is to add shading. This part is straightforward: all shadows and highlights
					are baked into a single image and added as a UIImageView right on top of everything. The
					image view is composited using a multiply blend mode.
				</p>
				<p>
					Prerendering the shading has several advantages. We can add as many shadows as we want,
					and there will be no performance cost over that of the image itself. Moreover, if we load
					the image from an asset catalog, we can specify an alternative version that will be used
					in dark mode. The downside is that we must know the size of the image in advance, but this
					isn&rsquo;t a problem: UISwitches have a fixed size.
				</p>
				<p>
					The last step is to add the track view. This is just a UIView with a background color
					that&rsquo;s added beneath the thumb view we just created. However, we want the thumb view
					to erase the portion of the track it covers. To do this, we set the thumb view&rsquo;s
					blend mode to copy. This makes the thumb view completely replace the pixels it covers,
					effectively cutting a hole in the track below it.
				</p>
			</div>
			<div class="-mx-5 mt-10 sm:mx-0">
				<img class="w-full" src={uiswitch_copy_png} alt="" width="1280" height="480" />
			</div>
			<div class="body-text mt-10">
				<p>
					This completes the visual portion of the switch. This is only half the work in its
					implementation; the other half is making it interactive. I&rsquo;ll briefly outline that
					process here, noting that the animations are all driven by a CADisplayLink as opposed to
					CAAnimations.
				</p>
				<p>
					Telegram uses CAAnimations in many other parts of the app, but I don&rsquo;t think
					they&rsquo;re the best tool for this specific problem. CAAnimations work best as
					&ldquo;fire and forget&rdquo; animations. Rather, our switch must be interactive and
					interruptible, with state that&rsquo;s a function of multiple concurrently running timing
					curves.
				</p>
				<p>
					To fully model the motion of the switch I used four independently running spring
					simulations. Each one was updated each frame according to the closed-form analytical
					solution of a damped harmonic oscillator. I chose to advance the simulations using a fixed
					timestep as opposed to the variable delta between frames; this makes the animation pause
					as opposed to skipping ahead in the event of a dropped frame. I find this behavior less
					visually jarring.
				</p>
				<p>
					The first spring drives the horizontal position of the thumb view. When the switch is
					dragged, we update the target of this spring&mdash;not the position itself&mdash;and let
					it continue to animate towards its target. This gives the thumb a nice, liquidy feel that
					seems to &ldquo;chase&rdquo; the user&rsquo;s finger. It also damps its velocity, which
					will be important later. When the user finishes dragging, we set the target to the on or
					off position and let it animate to completion.
				</p>
				<p>
					The second spring drives the scale of the thumb view. We scale up the thumb when the
					switch begins tracking a touch, and scale it back down when the touch finishes. We also
					use a timer to enforce a minimum duration from when the thumb scales up to when it scales
					back down. This ensures the thumb still animates in the event of a very quick tap on the
					switch.
				</p>
				<p>
					The third spring drives the jiggle of the thumb view. We stretch the thumb horizontally in
					proportion to the spring&rsquo;s value, and vertically in proportion to its inverse. This
					gives the thumb a nice, bouncy feel as it moves. The target of this spring is updated each
					frame according to the velocity of the first spring, meaning the faster it&rsquo;s
					dragged, the more it jiggles. Note that, because of this dependency, special care must be
					taken to ensure the springs are updated in the correct order.
				</p>
				<p>
					The final spring drives the color of the track. Rather than interpolating the RGB values,
					we composite the on color over the off color for an interpolated alpha value. This
					produces more accurate in-between colors when the off color is semitransparent. Updating
					the color requires updating the inputColor of the alpha threshold filter. This is another
					advantage of animating with a CADisplayLink: animating properties of CAFilters can be
					unreliable with CAAnimations.
				</p>
			</div>
			<h2 class="mt-8 text-2xl font-bold">Making a UISlider & UITabBar</h2>
			<div class="body-text mt-4">
				<p>
					The Telegram contest also called for a custom UISlider and UITabBar. I made these using a
					process very similar to that of the switch, so I&rsquo;ll only comment on a few points of
					interest.
				</p>
				<p>
					First off, up until this point, I haven&rsquo;t emphasized an important detail of the
					alpha threshold filter: it doesn&rsquo;t preserve colors.
				</p>
				<p>Let&rsquo;s revisit the metaball example to see what I mean:</p>
			</div>
			<div class="-mx-5 mt-10 sm:mx-0 lg:-mx-24">
				<img class="w-full" src={metaballs_color_png} alt="" width="1920" height="480" />
			</div>
			<div class="body-text mt-10">
				<p>
					This isn&rsquo;t an issue when the view contains only one color; we just set the
					inputColor to the original color of the view. But for the UISlider, there are two colors
					we need to consider: one for the track&rsquo;s background, and another for the part
					that&rsquo;s filled in.
				</p>
				<p>
					To solve this, we basically do the metaball effect twice&mdash;once for each
					color&mdash;then layer the effects on top of each other. I found this to be an effective
					approach, but it highlights a weakness of this technique for approximating Liquid Glass:
					it doesn&rsquo;t scale well for views with multiple colors.
				</p>
				<p>
					We encounter this problem again with the tab bar, which can contain up to three colors:
					one for the symbols and text, and another two for the badge that can appear in the corner.
					In this case I solved the problem a different way. We only apply the metaball effect for
					the color of the symbols and text. Then, on top of that, we add the views again, but
					without any filters. This brings back the original colors and sharpness. Finally, we apply
					our variable blur and shading to the entire hierarchy.
				</p>
			</div>
			<div class="-mx-5 mt-10 sm:mx-0 lg:-mx-24">
				<img class="w-full" src={tab_bars_png} alt="" width="1608" height="381" />
			</div>
			<div class="body-text mt-10">
				<p>
					In none of our examples have the limitations of the metaball technique been a dealbreaker.
					We control the layers the effect is applied to, letting us make strong assumptions about
					their content and colors. This wouldn&rsquo;t be possible if we applied the effect to an
					arbitrary background view, for example. In this case we would need a different approach.
				</p>
				<p>
					Overall, I think this is a powerful technique for approximating Liquid Glass. While not
					accurate to the pixel, it is visually convincing, maintainable, and efficient enough to
					run smoothly on older devices. This efficiency, coupled with a spring-based animation
					system using CADisplayLink, allows us to replicate the fluid interactivity of Liquid
					Glass, which contributes greatly to its overall feel.
				</p>
			</div>
		</article>
	</div>
</main>
