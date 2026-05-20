<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main>
	<Hero />
	<About />
	<Services />
	<Portfolio />
	<HowItWorks />
	<FAQ />
	<CTA />
</main>

<Footer />
