<script>
	import { faq } from '$lib/data/content.js';

	let openIndex = $state(-1);

	function toggle(index) {
		openIndex = openIndex === index ? -1 : index;
	}
</script>

<section id="faq" class="section-padding bg-white">
	<div class="section-container">
		<!-- Label -->
		<p class="label-sm mb-6">{faq.label}</p>

		<!-- Heading -->
		<h2 class="heading-section text-primary mb-12 lg:mb-16">{faq.heading}</h2>

		<!-- Accordion -->
		<div class="max-w-3xl">
			{#each faq.items as item, i}
				<div class="border-b border-gray-200">
					<button
						class="w-full flex items-start justify-between gap-4 py-6 text-left group cursor-pointer"
						onclick={() => toggle(i)}
						aria-expanded={openIndex === i}
						aria-controls="faq-panel-{i}"
						id="faq-header-{i}"
					>
						<span class="text-base font-medium text-primary group-hover:text-secondary transition-colors duration-200 pr-4">
							{item.question}
						</span>
						<span class="flex-shrink-0 mt-1">
							<svg
								class="w-4 h-4 text-secondary transition-transform duration-300 {openIndex === i ? 'rotate-180' : ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</span>
					</button>

					<div
						id="faq-panel-{i}"
						role="region"
						aria-labelledby="faq-header-{i}"
						class="overflow-hidden transition-all duration-300 ease-in-out"
						style="max-height: {openIndex === i ? '200px' : '0px'}; opacity: {openIndex === i ? '1' : '0'};"
					>
						<p class="body-text pb-6 pr-8 text-sm">{item.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
