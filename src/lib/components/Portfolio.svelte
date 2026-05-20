<script>
	import { content } from "$lib/i18n/index.svelte.js";
	import { reveal } from "$lib/actions/reveal.js";

	const i18n = $derived(content());
</script>

<section
	id="works"
	class="relative min-h-screen flex items-end overflow-hidden bg-black scroll-mt-20"
>
	<!-- Background video -->
	<div class="absolute inset-0 z-0 select-none pointer-events-none">
		<video
			class="w-full h-full object-cover object-center"
			autoplay
			muted
			loop
			playsinline
			poster="/images/portfolio-showcase.jpg"
			aria-hidden="true"
		>
			<!-- Add your video source here when available -->
			<!-- <source src="/videos/portfolio-reel.mp4" type="video/mp4" /> -->
		</video>
		<!-- Fallback: show poster image when no video source -->
		<img
			src="/images/portfolio-showcase.jpg"
			alt="Sentra Steel Works portfolio showcase"
			class="absolute inset-0 w-full h-full object-cover object-center"
		/>
		<!-- Dark overlay -->
		<div class="absolute inset-0 bg-black/50"></div>
	</div>

	<!-- Content overlaid at bottom-left -->
	<div
		class="relative z-10 w-full section-container pb-20 md:pb-28"
		use:reveal
	>
		<!-- Badge -->
		<span
			class="inline-block /10 text-white/70 text-[11px] font-medium tracking-widest px-3 py-1.5 rounded-sm mb-6"
		>
			{i18n.portfolio.label}
		</span>

		<!-- Heading -->
		<h2
			class="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-3xl"
		>
			{i18n.portfolio.heading}
		</h2>

		<!-- Subtext -->
		<p class="text-base text-white/70 max-w-xl leading-relaxed">
			{i18n.portfolio.subtext}
		</p>
	</div>
</section>
