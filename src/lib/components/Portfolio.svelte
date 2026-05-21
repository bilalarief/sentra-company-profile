<script>
	import { content } from "$lib/i18n/index.svelte.js";
	import { reveal } from "$lib/actions/reveal.js";

	const i18n = $derived(content());
</script>

<section
	id="works"
	class="relative min-h-screen flex items-end overflow-hidden bg-black scroll-mt-20"
>
	<!-- Background video -->
	<div
		class="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden"
	>
		<!-- Fallback: show poster image behind the video or if loading fails -->
		<img
			src="/images/portfolio-showcase.jpg"
			alt="Sentra Steel Works portfolio showcase"
			class="absolute inset-0 w-full h-full object-cover object-center"
		/>

		<!-- YouTube Background Video (Dummy Video ID: dQw4w9WgXcQ) -->
		<iframe
			class="absolute w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			src="https://www.youtube.com/embed/E-iDKm5RdWk?autoplay=1&mute=1&loop=1&playlist=E-iDKm5RdWk&showinfo=0&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&enablejsapi=1&fs=0"
			title="Sentra Steel Works portfolio showcase video"
			frameborder="0"
			allow="autoplay; encrypted-media"
			tabindex="-1"
		></iframe>
	</div>
</section>
