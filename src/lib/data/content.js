// ─── All copywriting for Sentra Steel Works landing page ───
// Edit text here — components pull from this single source.

export const siteInfo = {
	name: 'Sentra Steel Works',
	logoText: ['SentraSteel', '/ Works'],
	tagline: 'Custom Stainless Steel Fabrication & Furniture — Bandung',
	url: 'https://www.sentrasteelworks.my.id',
	email: 'hello@sentrasteelworks.my.id',
	phone: '+62 851-5992-2134',
	phoneHref: 'tel:+6285159922134',
	whatsapp: 'https://wa.me/6285159922134',
	address: 'Bandung, Indonesia',
	hours: 'Monday–Friday 9 AM–5 PM WIB',
	copyright: `© ${new Date().getFullYear()} Sentra Steel Works. All rights reserved.`
};

export const navLinks = [
	{ label: 'About', href: '#about' },
	{ label: 'Works', href: '#works' }
];

export const hero = {
	headline: 'We Work With Steel.\nWe Build What You Need.',
	subtext:
		'Custom stainless steel fabrication and furniture, made to order in Bandung. Built right, delivered on time.',
	primaryCta: { label: 'Start Your Project', href: '#contact' },
	ghostCta: { label: 'See Our Work', href: '#works' }
};

export const about = {
	label: 'About Us',
	heading:
		'Sentra Works is a stainless steel workshop based in Bandung. We do custom fabrication and furniture for homeowners, restaurants, cafes, and contractors who need the work done properly.',
	columns: [
		{
			title: 'Simple & direct',
			text: "We've been doing this long enough to know what matters: good materials, clean work, and no wasted time. If you need something built from steel, we'll get it done right."
		},
		{
			title: 'Client-focused',
			text: "Whether it's a single custom piece or a full commercial fit-out, we treat every order the same — your specs, your timeline, done properly. That's what keeps our clients coming back."
		}
	]
};

export const services = {
	label: 'Services',
	heading: 'What We Can Do For You',
	cards: [
		{
			title: 'Custom Steel\nFabrication',
			image: '/images/service-fabrication.png',
			imageAlt: 'Custom steel fabrication process showing welding and metalwork',
			description:
				"Got a specific need? Bring us your idea, measurements, or a reference photo — we'll build it.",
			bullets: [
				'Railings, frames & structures',
				'Welding, cutting & forming',
				'Surface finishing & polishing',
				'Installation available'
			]
		},
		{
			title: 'Stainless Steel\nFurniture',
			image: '/images/service-furniture.png',
			imageAlt: 'Stainless steel furniture including tables and shelving units',
			description:
				'Durable, clean, and built for daily use. Standard sizes ready, or we make it custom to fit your space.',
			bullets: [
				'Dining tables & workbenches',
				'Shelving, racks & storage',
				'Bar counters & kitchen sets',
				'Indoor & outdoor use',
				'Custom size on request'
			]
		}
	]
};

export const portfolio = {
	label: 'Works',
	heading: 'Built by Us. Tested by Use.',
	subtext: 'Every piece in our portfolio was made to order. No stock items, no shortcuts.'
};

export const howItWorks = {
	label: 'Process',
	heading: 'How It Works',
	subheading: "It's Simpler Than You Think. It only takes three steps.",
	steps: [
		{
			number: '01',
			title: 'Tell Us What You Need',
			text: "Share your idea, sketch, measurements, or a reference photo. No need to have it all figured out — we'll help you from there."
		},
		{
			number: '02',
			title: 'We Plan & Confirm',
			text: "We'll send you a quote with timeline and specs. Once confirmed, we get to work — no shortcuts, no guessing."
		},
		{
			number: '03',
			title: 'Built & Delivered',
			text: "Your piece is fabricated, finished, and ready on time. We can deliver or arrange pickup, whichever works for you."
		}
	]
};

export const faq = {
	label: 'FAQ',
	heading: 'Common Questions',
	items: [
		{
			question: 'Do you take small or one-off orders?',
			answer:
				"Yes. Whether it's a single shelf or a full kitchen fit-out, we handle both. Every order gets the same attention."
		},
		{
			question: 'How long does an order take?',
			answer:
				"Most custom pieces are ready within 7–14 working days, depending on complexity. We'll give you a clear timeline before we start."
		},
		{
			question: 'Do I need to have exact measurements or drawings?',
			answer:
				"Not necessarily. A reference photo and rough dimensions are usually enough to get started. We'll work out the details together."
		},
		{
			question: 'Where are you based, and do you deliver?',
			answer:
				"We're based in Bandung. Delivery is available within the area — just let us know your location when you reach out."
		}
	]
};

export const cta = {
	heading: 'Ready to Build Something?',
	subtext: "Tell us what you have in mind — we'll take it from there.",
	button: { label: 'Start Your Project', href: '#contact' }
};

export const footer = {
	socials: [
		{ label: 'Instagram', href: 'https://instagram.com/sentrasteelworks', icon: 'instagram' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/company/sentrasteelworks', icon: 'linkedin' },
		{ label: 'TikTok', href: 'https://tiktok.com/@sentrasteelworks', icon: 'tiktok' }
	]
};
