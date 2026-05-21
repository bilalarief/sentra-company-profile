<script>
	import { onMount } from "svelte";
	import { content, getLocale, setLocale, initLocale, languages } from "$lib/i18n/index.svelte.js";

	let scrolled = $state(false);
	let mobileOpen = $state(false);
	let langOpen = $state(false);
	let langRef = $state(null);

	const i18n = $derived(content());
	const currentLang = $derived(languages.find((l) => l.code === getLocale()) || languages[0]);

	onMount(() => {
		// Initialize locale (localStorage → browser → geo-detect)
		initLocale();

		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener("scroll", handleScroll, { passive: true });

		// Close language dropdown when clicking outside
		const handleClickOutside = (e) => {
			if (langRef && !langRef.contains(e.target)) {
				langOpen = false;
			}
		};
		document.addEventListener("click", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("click", handleClickOutside);
		};
	});

	function closeMobile() {
		mobileOpen = false;
	}

	function selectLanguage(code) {
		setLocale(code);
		langOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-white/95 backdrop-blur-md shadow-sm'
		: 'bg-transparent'}"
>
	{#snippet Flag(code)}
		{#if code === 'en'}
			<svg class="w-5 h-3 border border-white/20 overflow-hidden rounded-xs shrink-0" viewBox="0 0 50 30" aria-hidden="true">
				<rect width="50" height="30" fill="#012169"/>
				<path d="M0,0 L50,30 M0,30 L50,0" stroke="#FFFFFF" stroke-width="6"/>
				<path d="M0,0 L50,30 M0,30 L50,0" stroke="#C8102E" stroke-width="2"/>
				<path d="M25,0 L25,30 M0,15 L50,15" stroke="#FFFFFF" stroke-width="10"/>
				<path d="M25,0 L25,30 M0,15 L50,15" stroke="#C8102E" stroke-width="6"/>
			</svg>
		{:else if code === 'id'}
			<svg class="w-5 h-3 border border-white/20 overflow-hidden rounded-xs shrink-0" viewBox="0 0 3 2" aria-hidden="true">
				<rect width="3" height="1" fill="#E21C26" />
				<rect y="1" width="3" height="1" fill="#FFFFFF" />
			</svg>
		{/if}
	{/snippet}

	<div
		class="section-container flex items-center justify-between h-16 lg:h-20"
	>
		<!-- Logo -->
		<a
			href="/"
			class="flex items-center group"
			aria-label="Sentra Steel Works Home"
		>
			<img
				src="/images/logo.svg"
				width="126"
				height="41"
				alt="Sentra Steel Works Logo"
				class="h-8 lg:h-9 w-auto transition-all duration-200 {scrolled
					? 'brightness-0'
					: 'brightness-100'}"
			/>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden md:flex items-center gap-8">
			{#each i18n.navLinks as link}
				<a
					href={link.href}
					class="text-sm font-medium transition-colors duration-200 hover:opacity-70 {scrolled
						? 'text-primary'
						: 'text-white'}"
				>
					{link.label}
				</a>
			{/each}

			<!-- Language Selector -->
			<div class="relative" bind:this={langRef}>
				<button
					class="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:opacity-70 cursor-pointer {scrolled
						? 'text-primary'
						: 'text-white'}"
					onclick={() => (langOpen = !langOpen)}
					aria-label="Select language"
					aria-expanded={langOpen}
				>
					<span class="flex items-center">{@render Flag(currentLang.code)}</span>
					<span>{currentLang.label}</span>
					<svg
						class="w-3.5 h-3.5 transition-transform duration-200 {langOpen
							? 'rotate-180'
							: ''}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>

				<!-- Dropdown -->
				{#if langOpen}
					<div
						class="absolute right-0 top-full mt-2 min-w-[160px] bg-white rounded-sm shadow-lg border border-gray-100 overflow-hidden lang-dropdown"
					>
						{#each languages as lang}
							<button
								class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors duration-150 cursor-pointer
									{getLocale() === lang.code
									? 'bg-gray-50 text-primary font-semibold'
									: 'text-gray-600 hover:bg-gray-50 hover:text-primary'}"
								onclick={() => selectLanguage(lang.code)}
							>
								<span class="flex items-center">{@render Flag(lang.code)}</span>
								<span>{lang.name}</span>
								{#if getLocale() === lang.code}
									<svg
										class="w-4 h-4 ml-auto text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2.5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								{/if}
							</button>
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<!-- Mobile Hamburger -->
		<button
			class="md:hidden relative w-8 h-8 flex items-center justify-center"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={mobileOpen ? "Close menu" : "Open menu"}
			aria-expanded={mobileOpen}
		>
			<span class="sr-only"
				>{mobileOpen ? "Close" : "Open"} navigation menu</span
			>
			<div class="flex flex-col gap-1.5 w-5">
				<span
					class="block h-[1.5px] w-full transition-all duration-300 origin-center {scrolled
						? 'bg-primary'
						: ''} {mobileOpen
						? 'rotate-45 translate-y-[4.5px]'
						: ''}"
				></span>
				<span
					class="block h-[1.5px] w-full transition-all duration-300 {scrolled
						? 'bg-primary'
						: ''} {mobileOpen ? 'opacity-0 scale-x-0' : ''}"
				></span>
				<span
					class="block h-[1.5px] w-full transition-all duration-300 origin-center {scrolled
						? 'bg-primary'
						: ''} {mobileOpen
						? '-rotate-45 -translate-y-[4.5px]'
						: ''}"
				></span>
			</div>
		</button>
	</div>

	<!-- Mobile Drawer -->
	{#if mobileOpen}
		<div
			class="md:hidden overflow-hidden transition-all duration-300 {scrolled
				? '/95 backdrop-blur-md'
				: 'bg-dark/95 backdrop-blur-md'}"
		>
			<div class="section-container py-6 flex flex-col gap-4">
				{#each i18n.navLinks as link}
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

				<!-- Mobile Language Selector -->
				<div class="flex items-center gap-3 pt-4 border-t {scrolled ? 'border-gray-200' : 'border-white/15'}">
					{#each languages as lang}
						<button
							class="flex items-center gap-2 px-3 py-2 rounded-sm text-sm font-medium transition-all duration-200 cursor-pointer
								{getLocale() === lang.code
								? (scrolled ? 'bg-primary text-white' : 'bg-white text-primary')
								: (scrolled ? 'text-secondary hover:text-primary' : 'text-white/60 hover:text-white')}"
							onclick={() => selectLanguage(lang.code)}
						>
							<span class="flex items-center">{@render Flag(lang.code)}</span>
							<span>{lang.label}</span>
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>

<style>
	.lang-dropdown {
		animation: langDropIn 0.15s ease-out;
	}

	@keyframes langDropIn {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
