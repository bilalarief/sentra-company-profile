<script>
	import { content } from "$lib/i18n/index.svelte.js";
	import { reveal } from "$lib/actions/reveal.js";

	const i18n = $derived(content());
</script>

<section id="services" class=" py-20 md:py-28 scroll-mt-20">
	<div class="section-container" use:reveal>
		<div
			class="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-12 items-start"
		>
			<!-- Badge (Left Column) -->
			<div class="w-full">
				<span
					class="inline-block bg-slate-100 text-[#6B6B6B] text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-sm"
				>
					{i18n.services.label}
				</span>
			</div>

			<!-- Main Content (Right Columns) -->
			<div class="w-full">
				<!-- Heading -->
				<h2
					class="text-[26px] md:text-[36px] leading-[1.2] md:leading-[1.25] font-medium tracking-tight text-primary mb-12 lg:mb-16"
				>
					{i18n.services.heading}
				</h2>

				<!-- Service Cards Grid -->
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
					{#each i18n.services.cards as card}
						<div
							class="grid grid-cols-1 sm:grid-cols-2 border border-[#E5E7EB] rounded-sm overflow-hidden"
						>
							<!-- Left Column: Image with Overlay Title -->
							<div
								class="relative h-60 sm:h-full min-h-[220px] overflow-hidden"
							>
								<img
									src={card.image}
									alt={card.imageAlt}
									class="absolute inset-0 w-full h-full object-cover"
									loading="lazy"
								/>
								<!-- Title overlaid at top-left (no shadow black overlay) -->
								<div class="absolute top-0 left-0 p-5">
									<h3
										class="text-white text-[20px] lg:text-[22px] font-semibold leading-tight tracking-tight whitespace-pre-line"
									>
										{card.title}
									</h3>
								</div>
							</div>

							<!-- Right Column: Details list with separate rows (generous padding) -->
							<div class="flex flex-col h-full justify-between">
								<!-- Description (Top Section) -->
								<div class="p-6 flex-shrink-0">
									<p
										class="text-[14px] leading-relaxed text-[#555555]"
									>
										{card.description}
									</p>
								</div>

								<!-- Bullets List (Bottom Section, Gray-Blue background, comfortable row borders) -->
								<div
									class="flex-1 bg-[#F8FAFC] border-t border-[#E5E7EB] divide-y divide-[#E5E7EB] flex flex-col justify-start"
								>
									{#each card.bullets as bullet}
										<div
											class="py-3.5 px-6 text-[14px] text-[#444444] flex items-center gap-2.5"
										>
											<span
												class="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"
											></span>
											<span>{bullet}</span>
										</div>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
