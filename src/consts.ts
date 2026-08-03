// Site-wide settings. Edit this file to rebrand the theme — every page,
// the RSS feed, and Open Graph tags read from here.

export const SITE = {
  /** Site name — used in the header brand, <title>, and og:site_name. */
  title: 'Astro Keel',
  /** Default meta description for pages that don't set their own. */
  description: 'A minimal, neutral, and modern portfolio and blog theme for Astro.',
  /** Description of the RSS feed at /rss.xml. */
  rssDescription: 'Notes, essays, and release logs from Astro Keel.',
  /** Default social share image, relative to the site root (see public/). */
  ogImage: '/og.jpg',
  /** Post author, emitted in JSON-LD BlogPosting structured data.
   *  Leave empty ('') to omit the author field. */
  author: 'Astro Keel',
  /** Footer credit line. */
  footerText: 'Built with Astro Keel.',
} as const;

/** Icons bundled with the theme — see `src/components/SocialLinks.astro`. */
export type SocialIcon = 'github' | 'x' | 'linkedin' | 'rss' | 'email';

export interface SocialLink {
  /** Accessible name announced on the icon-only link. */
  label: string;
  /** Full URL, `mailto:` address, or site-root path (gets `base` applied). */
  href: string;
  icon: SocialIcon;
}

/** Social profiles rendered as inline SVG icons in the footer.
 *  Add or remove entries here — no template edits needed. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/kpab/astro-keel', icon: 'github' },
  { label: 'RSS feed', href: '/rss.xml', icon: 'rss' },
];

/** Header navigation. `href` is relative to the site root; the configured
 *  `base` is applied automatically via `withBase()`. */
export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/works/', label: 'Works' },
  { href: '/blog/', label: 'Blog' },
  { href: '/search/', label: 'Search' },
] as const;
