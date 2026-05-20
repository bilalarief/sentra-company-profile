<script>
	import { content } from "$lib/i18n/index.svelte.js";
	import { reveal } from "$lib/actions/reveal.js";

	const i18n = $derived(content());
</script>

<section id="faq" class="bg-slate-50 py-20 md:py-28 scroll-mt-20">
	<div class="section-container" use:reveal>
		<div
			class="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-12 items-start"
		>
			<!-- Badge (Left Column) -->
			<div class="w-full">
				<span
					class="inline-block bg-slate-100 text-[#6B6B6B] text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-sm"
				>
					{i18n.faq.label}
				</span>
			</div>

			<!-- Main Content -->
			<div class="w-full">
				<!-- Heading -->
				<h2
					class="text-[30px] md:text-[40px] font-semibold tracking-tight text-[#1a2332] leading-tight mb-12 lg:mb-16"
				>
					{i18n.faq.heading}
				</h2>

				<!-- FAQ Table (static, no accordion) -->
				<div class="w-full border-t border-[#D8DAE0]">
					{#each i18n.faq.items as item}
						<div
							class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 py-5 border-b border-[#D8DAE0] items-start"
						>
							<!-- Question -->
							<div
								class="text-[14px] font-bold text-[#1a2332] leading-snug"
							>
								{item.question}
							</div>
							<!-- Answer -->
							<div
								class="text-[14px] text-[#555] leading-relaxed"
							>
								{item.answer}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
