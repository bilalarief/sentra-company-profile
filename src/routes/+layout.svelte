<script>
	import { content, getLocale } from '$lib/i18n/index.svelte.js';
	import '../app.css';

	let { children } = $props();

	const i18n = $derived(content());

	$effect(() => {
		document.documentElement.lang = getLocale();
	});
</script>

<svelte:head>
	<!-- Primary Meta -->
	<title>{i18n.seo.title}</title>
	<meta name="description" content={i18n.seo.description} />
	<meta name="keywords" content={i18n.seo.keywords} />
	<meta name="author" content="Sentra Steel Works" />

	<!-- Open Graph -->
	<meta property="og:title" content={i18n.seo.title} />
	<meta property="og:description" content={i18n.seo.description} />
	<meta property="og:image" content="https://www.sentrasteelworks.my.id/images/portfolio-showcase.jpg" />
	<meta property="og:url" content="https://www.sentrasteelworks.my.id" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content={getLocale() === 'id' ? 'id_ID' : 'en_US'} />
	{#if getLocale() === 'id'}
		<meta property="og:locale:alternate" content="en_US" />
	{:else}
		<meta property="og:locale:alternate" content="id_ID" />
	{/if}

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={i18n.seo.title} />
	<meta name="twitter:description" content={i18n.seo.description} />
	<meta name="twitter:image" content="https://www.sentrasteelworks.my.id/images/portfolio-showcase.jpg" />

	<!-- Canonical -->
	<link rel="canonical" href="https://www.sentrasteelworks.my.id" />

	<!-- Structured Data (LocalBusiness) -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Sentra Steel Works",
		"description": i18n.seo.description,
		"url": "https://www.sentrasteelworks.my.id",
		"telephone": "+6285159922134",
		"email": "hello@sentrasteelworks.my.id",
		"priceRange": "$$",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Bandung",
			"addressRegion": "Jawa Barat",
			"addressCountry": "ID"
		},
		"openingHours": "Mo-Fr 09:00-17:00",
		"image": "https://www.sentrasteelworks.my.id/images/portfolio-showcase.jpg",
		"sameAs": [
			"https://instagram.com/sentrasteelworks",
			"https://linkedin.com/company/sentrasteelworks",
			"https://tiktok.com/@sentrasteelworks"
		]
	})}</script>`}

	<!-- Structured Data (WebSite) -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Sentra Steel Works",
		"url": "https://www.sentrasteelworks.my.id"
	})}</script>`}

	<!-- Structured Data (FAQPage) -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": i18n.faq.items.map(item => ({
			"@type": "Question",
			"name": item.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": item.answer
			}
		}))
	})}</script>`}
</svelte:head>

{@render children()}
