// ─── i18n main module ───
// Exports reactive content that auto-updates when locale changes.

import { getLocale, setLocale, initLocale } from './locale.svelte.js';
import { en } from './translations/en.js';
import { id } from './translations/id.js';

const translations = { en, id };

/**
 * Available languages for the selector.
 */
export const languages = [
	{ code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
	{ code: 'id', label: 'ID', name: 'Bahasa Indonesia', flag: '🇮🇩' }
];

/**
 * Get all translations for the current locale.
 * This is reactive — when locale changes, return value updates.
 */
export function content() {
	return translations[getLocale()] || translations.en;
}

/**
 * Translate a dot-separated key path, e.g. t('hero.headline')
 */
export function t(key) {
	const data = translations[getLocale()] || translations.en;
	return key.split('.').reduce((obj, k) => obj?.[k], data) ?? key;
}

export { getLocale, setLocale, initLocale };
