<script>
	import { content } from "$lib/i18n/index.svelte.js";

	const i18n = $derived(content());
</script>

<footer style="background-color: #0f1623;">
	<div class="section-container">
		<!-- Top Divider -->
		<div class=" py-12">
			<!-- 3-Column Info Grid -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
				<!-- Left: Contact Links -->
				<div class="flex flex-col gap-2">
					<a
						href="mailto:{i18n.siteInfo.email}"
						class="text-[22px] font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all duration-200 tracking-tight"
					>
						{i18n.siteInfo.email}
					</a>
					<a
						href={i18n.siteInfo.phoneHref}
						target="_blank"
						rel="noopener noreferrer"
						class="text-[22px] font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all duration-200 tracking-tight"
					>
						{i18n.siteInfo.phone}
					</a>
				</div>

				<!-- Middle: Office Hours -->
				<div class="flex flex-col gap-1.5">
					<span
						class="text-[12px] text-white/40 uppercase tracking-widest font-medium"
						>{i18n.footer.officeHours}</span
					>
					<p class="text-[14px] text-white/80">{i18n.siteInfo.hours}</p>
				</div>

				<!-- Right: Social Links -->
				<div class="flex flex-col gap-2">
					<span
						class="text-[12px] text-white/40 uppercase tracking-widest font-medium"
						>{i18n.footer.social}</span
					>
					<div class="flex items-center gap-6">
						{#each i18n.footer.socials as social}
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								class="text-[14px] font-semibold text-white hover:text-white/60 transition-colors duration-200"
								aria-label="Follow us on {social.label}"
							>
								{social.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class=" py-6 flex flex-col md:flex-row items-center justify-between gap-4"
		>
			<!-- Copyright -->
			<p class="text-[12px] text-white/40">{i18n.siteInfo.copyright}</p>

			<!-- Logo + Brand Name -->
			<a
				href="/"
				class="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-200"
				aria-label="Back to top"
			>
				<img
					src="/images/logo.svg"
					width="126"
					height="41"
					alt="Sentra Steel Works Logo"
					class="h-7 w-auto"
				/>
			</a>
		</div>
	</div>
</footer>
