<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<!-- Primary Meta -->
	<title>Sentra Steel Works — Custom Stainless Steel Fabrication & Furniture | Bandung</title>
	<meta name="description" content="Sentra Steel Works is a Bandung-based stainless steel workshop specializing in custom fabrication and furniture for homes, restaurants, cafes, and commercial spaces." />
	<meta name="keywords" content="stainless steel fabrication, custom steel furniture, Bandung workshop, metal fabrication Indonesia, steel welding, custom kitchen steel" />
	<meta name="author" content="Sentra Steel Works" />

	<!-- Open Graph -->
	<meta property="og:title" content="Sentra Steel Works — Custom Stainless Steel Fabrication & Furniture" />
	<meta property="og:description" content="Made-to-order stainless steel fabrication and furniture in Bandung. Built right, delivered on time." />
	<meta property="og:image" content="https://www.sentrasteelworks.my.id/og-image.jpg" />
	<meta property="og:url" content="https://www.sentrasteelworks.my.id" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="id_ID" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sentra Steel Works — Custom Steel Fabrication" />
	<meta name="twitter:description" content="Custom stainless steel fabrication and furniture, made to order in Bandung." />
	<meta name="twitter:image" content="https://www.sentrasteelworks.my.id/og-image.jpg" />

	<!-- Canonical -->
	<link rel="canonical" href="https://www.sentrasteelworks.my.id" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Sentra Steel Works",
		"description": "Custom stainless steel fabrication and furniture workshop in Bandung, Indonesia.",
		"url": "https://www.sentrasteelworks.my.id",
		"telephone": "+6285159922134",
		"email": "hello@sentrasteelworks.my.id",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Bandung",
			"addressCountry": "ID"
		},
		"openingHours": "Mo-Fr 09:00-17:00",
		"image": "https://www.sentrasteelworks.my.id/og-image.jpg"
	})}</script>`}
</svelte:head>

{@render children()}
