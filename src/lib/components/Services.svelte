<script>
	import { services } from '$lib/data/content.js';
</script>

<section id="services" class="section-padding bg-white">
	<div class="section-container">
		<!-- Label -->
		<p class="label-sm mb-6">{services.label}</p>

		<!-- Heading -->
		<h2 class="heading-section text-primary mb-12 lg:mb-16">{services.heading}</h2>

		<!-- Service Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
			{#each services.cards as card}
				<div class="group border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors duration-300">
					<!-- Card Image -->
					<div class="relative overflow-hidden aspect-[4/3]">
						<!-- Placeholder image — replace with actual photo -->
						<img
							src={card.image}
							alt={card.imageAlt}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							loading="lazy"
						/>
						<!-- Title Overlay -->
						<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
							<h3 class="text-white text-xl lg:text-2xl font-semibold p-6">
								{card.title}
							</h3>
						</div>
					</div>

					<!-- Card Content -->
					<div class="p-6 lg:p-8">
						<p class="body-text mb-5">{card.description}</p>

						<ul class="space-y-2.5">
							{#each card.bullets as bullet}
								<li class="flex items-start gap-3 text-sm text-secondary">
									<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0"></span>
									{bullet}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
