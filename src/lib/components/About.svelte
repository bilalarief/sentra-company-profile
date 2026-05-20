<script>
	import { content } from "$lib/i18n/index.svelte.js";
	import { reveal } from "$lib/actions/reveal.js";

	const i18n = $derived(content());
</script>

<section id="about" class="bg-slate-50 py-20 md:py-28 scroll-mt-20">
	<div class="section-container" use:reveal>
		<div
			class="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-12 items-start"
		>
			<!-- Badge (Left Column) -->
			<div class="w-full">
				<span
					class="inline-block bg-gray-100 text-[#6B6B6B] text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-sm"
				>
					{i18n.about.label}
				</span>
			</div>

			<!-- Main Content (Right Columns) -->
			<div class="w-full">
				<!-- Heading -->
				<h2
					class="text-[26px] md:text-[36px] leading-[1.2] md:leading-[1.25] font-medium tracking-tight text-primary mb-12 lg:mb-16"
				>
					{i18n.about.heading}
				</h2>

				<!-- Description Sub-columns -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
					{#each i18n.about.columns as col}
						<p class="text-[14px] leading-relaxed text-secondary">
							<span class="font-semibold text-primary mr-1"
								>{col.title}</span
							>
							{col.text}
						</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
