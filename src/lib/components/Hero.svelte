<script>
	import { content } from "$lib/i18n/index.svelte.js";
	import { reveal } from "$lib/actions/reveal.js";

	const i18n = $derived(content());
</script>

<section
	id="hero"
	class="relative min-h-screen flex items-end justify-start overflow-hidden bg-black"
>
	<!-- Background image container -->
	<div class="absolute inset-0 z-0 select-none pointer-events-none">
		<!-- Full opacity background image -->
		<img
			src="/images/hero-bg.webp"
			width="1440"
			height="800"
			alt="Sentra Steel Works metal fabrication workshop"
			class="w-full h-full object-cover object-center"
		/>
		<!-- Solid black overlay with 45% opacity matching Figma specs -->
		<div class="absolute inset-0 bg-black/45"></div>
	</div>

	<!-- Content pushed to bottom-left with global section-container -->
	<div class="relative z-10 w-full section-container pb-20 md:pb-28">
		<div class="max-w-3xl" use:reveal={{ y: 20, duration: 800 }}>
			<!-- Fluid display headline with Inter font in medium weight -->
			<h1
				class="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6 select-text"
			>
				{#each i18n.hero.headline.split("\n") as line, i}
					{#if i > 0}<br />{/if}{line}
				{/each}
			</h1>

			<!-- Subtext with regular weight, size 16px (text-base), and bold "Bandung" -->
			<p
				class="text-base text-white/80 max-w-xl mb-8 leading-relaxed select-text font-normal"
			>
				{@html i18n.hero.subtext.replace(
					i18n.hero.subtextCity,
					`<span class="font-bold">${i18n.hero.subtextCity}</span>`,
				)}
			</p>

			<!-- Buttons with rounded-sm border radius -->
			<div class="flex flex-row items-center gap-4">
				<a
					href={i18n.siteInfo.phoneHref}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center bg-white justify-center px-6 py-3 text-[#111111] text-sm font-semibold rounded-sm hover:bg-neutral-200 transition-colors duration-200"
					aria-label={i18n.hero.primaryCta.label}
				>
					{i18n.hero.primaryCta.label}
				</a>
				<a
					href={i18n.hero.ghostCta.href}
					class="inline-flex items-center justify-center px-6 py-3 border border-white text-white text-sm font-semibold rounded-sm hover:bg-white/10 transition-colors duration-200"
					aria-label={i18n.hero.ghostCta.label}
				>
					{i18n.hero.ghostCta.label}
				</a>
			</div>
		</div>
	</div>
</section>
