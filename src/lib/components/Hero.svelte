<script>
	import { hero } from '$lib/data/content.js';
</script>

<section id="hero" class="relative min-h-screen flex items-center justify-start overflow-hidden" style="background-color: #1a1a1a;">
	<!-- Dark background with overlay gradient for depth -->
	<div class="absolute inset-0 z-0">
		<!-- Placeholder: replace with actual hero-bg.jpg -->
		<img
			src="https://placehold.co/1920x1080?text=Steel+Workshop"
			alt="Stainless steel fabrication workshop background"
			class="w-full h-full object-cover opacity-40"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 section-container w-full py-32 lg:py-0">
		<div class="max-w-2xl">
			<h1 class="heading-display text-white mb-6 whitespace-pre-line">
				{hero.headline}
			</h1>

			<p class="body-text text-white/70 max-w-lg mb-10 text-base lg:text-lg">
				{hero.subtext}
			</p>

			<div class="flex flex-wrap gap-4">
				<a
					href={hero.primaryCta.href}
					class="inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary text-sm font-semibold rounded-none hover:bg-white/90 transition-all duration-200"
					aria-label={hero.primaryCta.label}
				>
					{hero.primaryCta.label}
				</a>
				<a
					href={hero.ghostCta.href}
					class="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white text-sm font-semibold rounded-none hover:bg-white/10 transition-all duration-200"
					aria-label={hero.ghostCta.label}
				>
					{hero.ghostCta.label}
				</a>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
		<svg class="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
			<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
		</svg>
	</div>
</section>
