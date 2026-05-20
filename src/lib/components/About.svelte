<script>
	import { about } from '$lib/data/content.js';
</script>

<section id="about" class="section-padding bg-white">
	<div class="section-container">
		<!-- Label -->
		<p class="label-sm mb-6">{about.label}</p>

		<!-- Large Display Heading -->
		<h2 class="heading-section max-w-4xl mb-16 lg:mb-20 text-primary leading-snug">
			{about.heading}
		</h2>

		<!-- Two Columns -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
			{#each about.columns as col}
				<div>
					<h3 class="text-sm font-semibold text-primary mb-3 tracking-tight">{col.title}</h3>
					<p class="body-text">{col.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
