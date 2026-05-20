<script>
	import { portfolio } from '$lib/data/content.js';
</script>

<section id="works" class="section-padding" style="background-color: #F5F5F3;">
	<div class="section-container">
		<!-- Label -->
		<p class="label-sm mb-6">{portfolio.label}</p>

		<!-- Heading -->
		<h2 class="heading-section text-primary mb-12 lg:mb-16">{portfolio.heading}</h2>

		<!-- Video Embed Placeholder -->
		<!-- TODO: Replace with actual YouTube/Vimeo embed or self-hosted video -->
		<div class="relative w-full overflow-hidden bg-dark rounded-sm" style="aspect-ratio: 16/9;">
			<!-- Placeholder for video embed -->
			<div class="absolute inset-0 flex items-center justify-center bg-dark">
				<!-- Play button overlay -->
				<button
					class="relative z-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
					aria-label="Play portfolio video"
				>
					<svg class="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
						<path d="M8 5v14l11-7z" />
					</svg>
				</button>
				<!-- Placeholder background image -->
				<img
					src="https://placehold.co/1280x720?text=Portfolio+Video"
					alt="Portfolio showcase video thumbnail"
					class="absolute inset-0 w-full h-full object-cover opacity-30"
					loading="lazy"
				/>
			</div>
		</div>

		<!-- Subtext -->
		<p class="body-text mt-8 max-w-xl">{portfolio.subtext}</p>
	</div>
</section>
