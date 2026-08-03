// English UI dictionary — the reference translation.
//
// This file also defines the *shape* every other dictionary must match, so add
// a key here first, then to each locale under `src/i18n/`. Keys are flat and
// dotted; `{name}` placeholders are filled in by `t()`.
//
// A handful of values carry inline markup (`<code>`); those are rendered with
// `set:html`. They are theme-authored, never user input.
//
// Note: values are deliberately *not* `as const` — widening them to `string`
// is what lets other locales satisfy `UIStrings`.

export const en = {
  // Header, footer, and other chrome
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.works': 'Works',
  'nav.blog': 'Blog',
  'nav.search': 'Search',
  'nav.label': 'Main navigation',
  'nav.brandHome': '{site} home',
  'theme.toggle': 'Toggle color theme',
  'footer.notes': 'Notes',
  'social.label': 'Social links',

  // Pagination
  'pagination.label': 'Pagination',
  'pagination.newer': '← Newer',
  'pagination.older': 'Older →',
  'pagination.status': 'Page {current} of {total}',

  // Home
  'home.description': 'A minimal portfolio and writing theme for careful technical work.',
  'home.eyebrow': 'Portfolio / writing / systems notes',
  'home.heading': 'Structural minimalism for careful digital work.',
  'home.lead':
    'Astro Keel gives projects, essays, and professional notes a disciplined frame: editorial type, measured rhythm, and a single accent carried through fine structural rules.',
  'home.primaryLinks': 'Primary links',
  'home.viewWorks': 'View works',
  'home.readNotes': 'Read notes',
  'home.overviewLabel': 'Theme overview',
  'home.principlesEyebrow': 'Principles',
  'home.principlesHeading': 'Readable first, decorative last.',
  'home.principleRhythmTitle': 'Baseline rhythm',
  'home.principleRhythmBody': 'Vertical spacing follows a steady cadence for long-form reading.',
  'home.principleContentTitle': 'Typed content',
  'home.principleContentBody': 'Collections are prepared for project case studies and durable notes.',
  'home.principleLinesTitle': 'Keel lines',
  'home.principleLinesBody': 'Fine rules create structure without relying on decorative effects.',
  'home.latestWorksEyebrow': 'Latest works',
  'home.latestWorksHeading': 'Built records.',
  'home.allWorks': 'All works',
  'home.worksEmpty':
    'Add works under <code>src/content/works</code> to surface the latest projects here.',
  'home.workTech': '{title} technology',
  'home.latestBlogEyebrow': 'Latest blog',
  'home.latestBlogHeading': 'Field notes.',
  'home.allPosts': 'All posts',
  'home.postsEmpty':
    'Add blog entries under <code>src/content/blog</code> to surface the latest notes here.',

  // Blog index
  'blog.title': 'Blog',
  'blog.titlePaged': 'Blog · Page {page}',
  'blog.description': 'Notes and writing — {site}, a minimal portfolio and blog theme for Astro.',
  'blog.eyebrow': 'Blog',
  'blog.heading': 'Notes, essays, and release logs.',
  'blog.lead':
    'The blog collection supports tags, descriptions, draft filtering, publish dates, and optional hero images.',
  'blog.listLabel': 'Blog posts',
  'blog.tagsEyebrow': 'Tags',
  'blog.tagsNavLabel': 'Blog tags',

  // Tag archive
  'tag.title': 'Posts tagged “{tag}”',
  'tag.titlePaged': 'Posts tagged “{tag}” · Page {page}',
  'tag.description': 'Blog posts tagged {tag} on {site}.',
  'tag.eyebrow': 'Tag',
  'tag.lead': 'Notes collected under the {tag} tag.',
  'tag.listLabel': '{tag} posts',
  'tag.moreTagsEyebrow': 'More tags',
  'tag.otherTagsNavLabel': 'Other blog tags',
  'tag.allPosts': 'All posts',

  // Blog post
  'post.eyebrow': 'Blog',
  'post.tocLabel': 'Table of contents',
  'post.contentsEyebrow': 'Contents',
  'post.adjacentLabel': 'Adjacent posts',
  'post.previous': 'Previous',
  'post.next': 'Next',
  'post.relatedEyebrow': 'Related',
  'post.breadcrumbHome': 'Home',
  'post.breadcrumbBlog': 'Blog',

  // Works index
  'works.title': 'Works',
  'works.description': 'Selected projects and case studies — {site}.',
  'works.eyebrow': 'Works',
  'works.heading': 'Selected projects and case studies.',
  'works.lead':
    'The works collection is typed for descriptions, technology lists, external links, repositories, thumbnails, ordering, and publish dates.',
  'works.listLabel': 'Selected works',

  // Work detail
  'work.eyebrow': 'Work',
  'work.visit': 'Visit project',
  'work.repository': 'View repository',
  'work.stackEyebrow': 'Stack',

  // About
  'about.title': 'About',
  'about.description': 'About the author behind this {site} site.',
  'about.eyebrow': 'About',
  'about.heading': 'A measured profile for the person behind the work.',
  'about.lead':
    'This page is shaped for a concise biography, a working philosophy, and the handful of details that help readers understand how you think.',
  'about.profileEyebrow': 'Profile',
  'about.profileHeading': 'Quiet systems, clear writing, durable interfaces.',
  'about.profileBody1':
    'I work across product strategy, interface systems, and technical writing. The common thread is structure: making complex material easier to scan, trust, and maintain.',
  'about.profileBody2':
    'Astro Keel leaves room for this kind of context without forcing a loud personal brand. Replace this placeholder with a specific background, current role, and the constraints that shape your work.',
  'about.ledgerLabel': 'Experience summary',
  'about.focusTitle': 'Current focus',
  'about.focusBody': 'Designing lean content systems, portfolio surfaces, and editorial product pages.',
  'about.backgroundTitle': 'Background',
  'about.backgroundBody':
    'Experience spanning frontend implementation, design systems, and writing for technical audiences.',
  'about.contactTitle': 'Contact',
  'about.contactBody':
    'Use this section for availability, collaboration preferences, or a direct contact route.',
  'about.methodEyebrow': 'Method',
  'about.methodHeading': 'Structure before surface.',
  'about.methodBody':
    'The theme treats the page like a working document: hierarchy first, rhythm second, visual signature third. Fine rules, generous spacing, and type contrast carry the identity without competing with the content.',

  // Search
  'search.title': 'Search',
  'search.description': 'Search posts and works — {site}.',
  'search.eyebrow': 'Search',
  'search.heading': 'Find posts and works.',
  'search.lead': 'Fully static search powered by Pagefind — indexed at build time, no backend required.',
  'search.sectionLabel': 'Site search',
  'search.fallback':
    'The search index is generated at build time. Run <code>npm run build</code> and preview the site to try it — it is not available on the dev server.',

  // 404
  'notFound.title': 'Page not found',
  'notFound.description': 'The page you were looking for does not exist.',
  'notFound.eyebrow': '404 — Not found',
  'notFound.heading': 'This page drifted off course.',
  'notFound.lead':
    'The address may have moved, or it never existed. The keel lines below lead back to steady water.',
  'notFound.linksLabel': 'Recovery links',
  'notFound.home': 'Back home',
  'notFound.blog': 'Read the blog',
  'notFound.works': 'Browse works',

  // Generated Open Graph images
  'og.blog': 'Blog',
  'og.work': 'Work',
};

/** The shape every dictionary must implement. */
export type UIStrings = typeof en;

/** Every valid translation key. */
export type UIKey = keyof UIStrings;
