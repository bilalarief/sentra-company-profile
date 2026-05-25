<script>
	import { content } from "$lib/i18n/index.svelte.js";
	import { reveal } from "$lib/actions/reveal.js";

	const i18n = $derived(content());
</script>

<section id="process" class="bg-slate-50 py-20 md:py-28 scroll-mt-20">
	<div class="section-container" use:reveal>
		<div
			class="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-12 items-start"
		>
			<!-- Badge (Left Column) -->
			<div class="w-full">
				<span
					class="inline-block bg-slate-100 text-[#6B6B6B] text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-sm"
				>
					{i18n.howItWorks.label}
				</span>
			</div>

			<!-- Main Content -->
			<div class="w-full">
				<!-- Heading -->
				<h2
					class="text-[30px] md:text-[40px] font-semibold tracking-tight text-[#1a2332] leading-tight mb-3"
				>
					{i18n.howItWorks.heading}
				</h2>

				<!-- Subheading on one line -->
				<p class="text-[14px] text-[#444] mb-12">
					<span class="font-semibold"
						>{i18n.howItWorks.subheading.split(".")[0]}.</span
					>
					<span class="ml-6"
						>{i18n.howItWorks.subheading.split(".")[1]?.trim()}</span
					>
				</p>

				<!-- Steps Table -->
				<div class="w-full border-t border-[#D8DAE0]">
					{#each i18n.howItWorks.steps as step}
						<div
							class="grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-2 md:gap-6 py-5 border-b border-[#D8DAE0] items-start"
						>
							<!-- Step Number -->
							<div
								class="text-[14px] font-semibold text-[#1a2332]"
							>
								{i18n.howItWorks.stepPrefix} {step.number}
							</div>
							<!-- Step Title -->
							<div class="text-[14px] font-bold text-[#1a2332]">
								{step.title}
							</div>
							<!-- Step Description -->
							<div
								class="text-[14px] text-[#555] leading-relaxed"
							>
								{step.text}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
