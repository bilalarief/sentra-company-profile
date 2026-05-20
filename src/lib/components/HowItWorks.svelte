<script>
	import { howItWorks } from '$lib/data/content.js';
</script>

<section id="process" class="section-padding bg-white">
	<div class="section-container">
		<!-- Label -->
		<p class="label-sm mb-6">{howItWorks.label}</p>

		<!-- Heading & Subheading -->
		<div class="mb-12 lg:mb-16">
			<h2 class="heading-section text-primary mb-4">{howItWorks.heading}</h2>
			<p class="body-text max-w-lg">{howItWorks.subheading}</p>
		</div>

		<!-- Steps -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
			{#each howItWorks.steps as step, i}
				<div class="relative">
					<!-- Connector line (desktop only) -->
					{#if i < howItWorks.steps.length - 1}
						<div class="hidden md:block absolute top-4 left-full w-full h-[1px] bg-gray-200 -z-0"></div>
					{/if}

					<!-- Step Number -->
					<div class="flex items-center gap-4 mb-4">
						<span class="text-xs font-semibold text-secondary tracking-widest">Step {step.number}</span>
						<div class="flex-1 h-[1px] bg-gray-200 md:hidden"></div>
					</div>

					<!-- Step Title -->
					<h3 class="text-lg font-semibold text-primary mb-3">{step.title}</h3>

					<!-- Step Description -->
					<p class="body-text text-sm">{step.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
