<script>
	import { content, getLocale } from '$lib/i18n/index.svelte.js';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	const i18n = $derived(content());

	$effect(() => {
		document.documentElement.lang = getLocale();
	});

	onMount(() => {
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			window.dataLayer.push(arguments);
		};
		window.gtag('js', new Date());
		window.gtag('config', 'G-JK9TER405X');
	});
</script>

<svelte:head>
	<!-- Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-JK9TER405X"></script>

	<!-- Primary Meta — reactive to locale -->
	<title>{i18n.seo.title}</title>
	<meta name="description" content={i18n.seo.description} />
	<meta name="keywords" content={i18n.seo.keywords} />
	<meta name="author" content="Sentra Steel Works" />
	<meta name="google-site-verification" content="JyqYQOTg8djzUUhlAUdGHRguwxjoBqP-AkOO0RqQZno" />

	<!-- Robots & Geo-Targeting -->
	<meta name="robots" content="index, follow" />
	<meta name="geo.region" content="ID-JB" />
	<meta name="geo.placename" content="Bandung" />
	<meta name="geo.position" content="-6.9175;107.6191" />
	<meta name="ICBM" content="-6.9175, 107.6191" />

	<!-- Open Graph — reactive to locale -->
	<meta property="og:title" content={i18n.seo.title} />
	<meta property="og:description" content={i18n.seo.description} />
	<meta property="og:image" content="https://www.sentrasteelworks.my.id/images/meta-og.png" />
	<meta property="og:url" content="https://www.sentrasteelworks.my.id" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Sentra Steel Works" />
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
	<meta name="twitter:image" content="https://www.sentrasteelworks.my.id/images/meta-og.png" />

	<!-- Hreflang for single-URL bilingual site -->
	<link rel="alternate" hreflang="id" href="https://www.sentrasteelworks.my.id" />
	<link rel="alternate" hreflang="en" href="https://www.sentrasteelworks.my.id" />
	<link rel="alternate" hreflang="x-default" href="https://www.sentrasteelworks.my.id" />

	<!-- Canonical -->
	<link rel="canonical" href="https://www.sentrasteelworks.my.id" />

	<!-- Structured Data — LocalBusiness -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'name': 'Sentra Steel Works',
		'description': 'Jasa fabrikasi besi dan stainless steel custom di Bandung, Jawa Barat. Melayani pembuatan kanopi, pagar, atap baja, railing untuk hunian dan proyek komersial.',
		'url': 'https://www.sentrasteelworks.my.id',
		'telephone': '+6285111321442',
		'email': 'hello@sentrasteelworks.my.id',
		'image': 'https://www.sentrasteelworks.my.id/images/meta-og.png',
		'priceRange': '$$',
		'address': {
			'@type': 'PostalAddress',
			'addressLocality': 'Bandung',
			'addressRegion': 'Jawa Barat',
			'addressCountry': 'ID'
		},
		'geo': {
			'@type': 'GeoCoordinates',
			'latitude': -6.9175,
			'longitude': 107.6191
		},
		'areaServed': [
			'Bandung', 'Cimahi', 'Bandung Barat',
			'Bekasi', 'Jakarta', 'Jawa Barat'
		],
		'openingHours': 'Mo-Fr 08:00-17:00',
		'sameAs': [
			'https://www.facebook.com/profile.php?id=61590043816588',
			'https://instagram.com/sentrasteelworks',
			'https://linkedin.com/company/sentrasteelworks',
			'https://tiktok.com/@sentrasteelworks'
		],
		'hasOfferCatalog': {
			'@type': 'OfferCatalog',
			'name': 'Layanan Fabrikasi Besi',
			'itemListElement': [
				'Kanopi custom carport dan teras',
				'Pagar besi dan stainless minimalis',
				'Atap baja ringan',
				'Railing tangga dan balkon',
				'Pintu besi custom',
				'Fabrikasi baja stainless',
				'Konstruksi baja komersial'
			]
		}
	})}</script>`}

	<!-- Structured Data — WebSite -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'name': 'Sentra Steel Works',
		'url': 'https://www.sentrasteelworks.my.id',
		'potentialAction': {
			'@type': 'SearchAction',
			'target': {
				'@type': 'EntryPoint',
				'urlTemplate': 'https://www.sentrasteelworks.my.id/?s={search_term_string}'
			},
			'query-input': 'required name=search_term_string'
		}
	})}</script>`}

	<!-- Structured Data — FAQPage -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		'mainEntity': i18n.faq.items.map(item => ({
			'@type': 'Question',
			'name': item.question,
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': item.answer
			}
		}))
	})}</script>`}
</svelte:head>

{@render children()}
