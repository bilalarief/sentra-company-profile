<script>
	import { cta, siteInfo } from '$lib/data/content.js';
</script>

<section id="contact" class="py-20 lg:py-28" style="background-color: #111111;">
	<div class="section-container text-center">
		<h2 class="heading-section text-white mb-5">{cta.heading}</h2>
		<p class="body-text text-white/60 max-w-md mx-auto mb-10">{cta.subtext}</p>
		<a
			href={siteInfo.whatsapp}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary text-sm font-semibold hover:bg-white/90 transition-all duration-200"
			aria-label="Start your project via WhatsApp"
		>
			{cta.button.label}
		</a>
	</div>
</section>
