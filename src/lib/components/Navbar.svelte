<script>
	import { onMount } from 'svelte';
	import { siteInfo, navLinks } from '$lib/data/content.js';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-white/95 backdrop-blur-md shadow-sm'
		: 'bg-transparent'}"
>
	<div class="section-container flex items-center justify-between h-16 lg:h-20">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 group" aria-label="Sentra Steel Works Home">
			<!-- Geometric SVG icon -->
			<svg
				class="w-7 h-7 transition-colors duration-200 {scrolled ? 'text-primary' : 'text-white'}"
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="2" y="2" width="11" height="11" fill="currentColor" rx="1" />
				<rect x="15" y="2" width="11" height="11" fill="currentColor" rx="1" opacity="0.6" />
				<rect x="2" y="15" width="11" height="11" fill="currentColor" rx="1" opacity="0.6" />
				<rect x="15" y="15" width="11" height="11" fill="currentColor" rx="1" opacity="0.3" />
			</svg>
			<span
				class="text-sm font-semibold tracking-tight transition-colors duration-200 {scrolled
					? 'text-primary'
					: 'text-white'}"
			>
				{siteInfo.logoText[0]}<span class="font-normal opacity-60 ml-1"
					>{siteInfo.logoText[1]}</span
				>
			</span>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden md:flex items-center gap-8">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm font-medium transition-colors duration-200 hover:opacity-70 {scrolled
						? 'text-primary'
						: 'text-white'}"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Mobile Hamburger -->
		<button
			class="md:hidden relative w-8 h-8 flex items-center justify-center"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
		>
			<span class="sr-only">{mobileOpen ? 'Close' : 'Open'} navigation menu</span>
			<div class="flex flex-col gap-1.5 w-5">
				<span
					class="block h-[1.5px] w-full transition-all duration-300 origin-center {scrolled
						? 'bg-primary'
						: 'bg-white'} {mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}"
				></span>
				<span
					class="block h-[1.5px] w-full transition-all duration-300 {scrolled
						? 'bg-primary'
						: 'bg-white'} {mobileOpen ? 'opacity-0 scale-x-0' : ''}"
				></span>
				<span
					class="block h-[1.5px] w-full transition-all duration-300 origin-center {scrolled
						? 'bg-primary'
						: 'bg-white'} {mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}"
				></span>
			</div>
		</button>
	</div>

	<!-- Mobile Drawer -->
	{#if mobileOpen}
		<div
			class="md:hidden overflow-hidden transition-all duration-300 {scrolled
				? 'bg-white/95 backdrop-blur-md'
				: 'bg-dark/95 backdrop-blur-md'}"
		>
			<div class="section-container py-6 flex flex-col gap-4">
				{#each navLinks as link}
					<a
						href={link.href}
						onclick={closeMobile}
						class="text-lg font-medium transition-colors duration-200 {scrolled
							? 'text-primary hover:text-secondary'
							: 'text-white hover:text-white/70'}"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
