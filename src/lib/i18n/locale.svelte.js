// ─── Reactive locale store (Svelte 5 runes) ───
// Manages the current language and persists to localStorage.
// Supports auto-detection via browser language + IP geolocation.

const STORAGE_KEY = 'sentra-locale';
const SUPPORTED = ['en', 'id'];
const DEFAULT = 'id';

let locale = $state(DEFAULT);
let detected = $state(false);

/**
 * Get the current locale reactively.
 */
export function getLocale() {
	return locale;
}

/**
 * Set the locale and persist to localStorage.
 * @param {string} lang
 */
export function setLocale(lang) {
	if (SUPPORTED.includes(lang)) {
		locale = lang;
		try {
			localStorage.setItem(STORAGE_KEY, lang);
		} catch {
			// SSR / storage unavailable
		}
	}
}

/**
 * Whether auto-detection has completed.
 */
export function isDetected() {
	return detected;
}

/**
 * Initialize locale: localStorage → browser lang → geo-detect fallback.
 * Call this once on app mount.
 */
export async function initLocale() {
	// 1. Check localStorage first (user preference overrides everything)
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved && SUPPORTED.includes(saved)) {
			locale = saved;
			detected = true;
			return;
		}
	} catch {
		// SSR / storage unavailable
	}

	// 2. Check browser language
	try {
		const browserLang = navigator.language?.toLowerCase() || '';
		if (browserLang.startsWith('id')) {
			locale = 'id';
			detected = true;
			return;
		}
	} catch {
		// navigator not available
	}

	// 3. Geo-detect via free IP API (fallback)
	try {
		const res = await fetch('https://ipapi.co/json/', {
			signal: AbortSignal.timeout(3000)
		});
		if (res.ok) {
			const data = await res.json();
			if (data.country_code === 'ID') {
				locale = 'id';
			}
		}
	} catch {
		// Network error or timeout — keep default
	}

	detected = true;
}
