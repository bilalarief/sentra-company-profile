<script>
	import { content } from "$lib/i18n/index.svelte.js";
	import { reveal } from "$lib/actions/reveal.js";

	const i18n = $derived(content());
</script>

<section id="contact" class="py-16 lg:py-20" style="background-color: #0f1623;">
	<div class="section-container" use:reveal>
		<div
			class="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
		>
			<!-- Left: Heading + Subtext -->
			<div>
				<h2
					class="text-[32px] md:text-[42px] font-semibold text-white leading-tight tracking-tight mb-3"
				>
					{i18n.cta.heading}
				</h2>
				<p class="text-[14px] text-white/60 max-w-sm leading-relaxed">
					{i18n.cta.subtext}
				</p>
			</div>

			<!-- Right: CTA Button -->
			<div class="flex-shrink-0">
				<a
					href={i18n.siteInfo.whatsapp}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center px-6 py-3 border border-white text-white text-sm font-medium hover: hover:text-[#0f1623] transition-all duration-200 rounded-sm whitespace-nowrap"
					aria-label={i18n.cta.button.label}
				>
					{i18n.cta.button.label}
				</a>
			</div>
		</div>
	</div>
</section>
