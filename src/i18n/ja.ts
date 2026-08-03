// Japanese UI dictionary — shipped as a reference translation alongside `en`.
// Copy this file to add your own locale; `UIStrings` makes a missing key a
// type error, so nothing can silently fall back to English.
import type { UIStrings } from './en';

export const ja: UIStrings = {
  // Header, footer, and other chrome
  'nav.home': 'ホーム',
  'nav.about': 'プロフィール',
  'nav.works': '制作物',
  'nav.blog': 'ブログ',
  'nav.search': '検索',
  'nav.label': 'メインナビゲーション',
  'nav.brandHome': '{site} のホーム',
  'theme.toggle': '配色テーマを切り替える',
  'footer.notes': 'ノート',
  'social.label': 'ソーシャルリンク',

  // Pagination
  'pagination.label': 'ページ送り',
  'pagination.newer': '← 新しい記事',
  'pagination.older': '古い記事 →',
  'pagination.status': '{total} ページ中 {current} ページ目',

  // Home
  'home.description': '丁寧な技術的仕事のための、ミニマルなポートフォリオ兼ブログテーマ。',
  'home.eyebrow': 'ポートフォリオ / 執筆 / システムノート',
  'home.heading': '丁寧なデジタルワークのための、構造的ミニマリズム。',
  'home.lead':
    'Astro Keel は、プロジェクト・エッセイ・実務ノートに規律ある枠組みを与えます。エディトリアルな書体、整えられたリズム、細い罫線を貫く一色のアクセント。',
  'home.primaryLinks': '主要リンク',
  'home.viewWorks': '制作物を見る',
  'home.readNotes': 'ノートを読む',
  'home.overviewLabel': 'テーマの概要',
  'home.principlesEyebrow': '設計方針',
  'home.principlesHeading': '読みやすさが先、装飾は最後。',
  'home.principleRhythmTitle': 'ベースラインのリズム',
  'home.principleRhythmBody': '縦の余白は一定の拍を刻み、長い文章でも読み進めやすくします。',
  'home.principleContentTitle': '型付きコンテンツ',
  'home.principleContentBody': 'コレクションは、ケーススタディにも長く残るノートにも対応します。',
  'home.principleLinesTitle': 'キールライン',
  'home.principleLinesBody': '細い罫線だけで構造をつくり、装飾的な効果に頼りません。',
  'home.latestWorksEyebrow': '最新の制作物',
  'home.latestWorksHeading': 'つくった記録。',
  'home.allWorks': 'すべての制作物',
  'home.worksEmpty':
    '<code>src/content/works</code> に制作物を追加すると、ここに最新のプロジェクトが並びます。',
  'home.workTech': '{title} の使用技術',
  'home.latestBlogEyebrow': '最新のブログ',
  'home.latestBlogHeading': 'フィールドノート。',
  'home.allPosts': 'すべての記事',
  'home.postsEmpty':
    '<code>src/content/blog</code> に記事を追加すると、ここに最新のノートが並びます。',

  // Blog index
  'blog.title': 'ブログ',
  'blog.titlePaged': 'ブログ · {page} ページ目',
  'blog.description': 'ノートと執筆 — Astro 向けのミニマルなポートフォリオ兼ブログテーマ、{site}。',
  'blog.eyebrow': 'ブログ',
  'blog.heading': 'ノート、エッセイ、リリースログ。',
  'blog.lead':
    'ブログコレクションは、タグ・説明文・下書きの除外・公開日・任意のヒーロー画像に対応しています。',
  'blog.listLabel': 'ブログ記事',
  'blog.tagsEyebrow': 'タグ',
  'blog.tagsNavLabel': 'ブログのタグ',

  // Tag archive
  'tag.title': '「{tag}」タグの記事',
  'tag.titlePaged': '「{tag}」タグの記事 · {page} ページ目',
  'tag.description': '{site} の「{tag}」タグが付いたブログ記事。',
  'tag.eyebrow': 'タグ',
  'tag.lead': '「{tag}」タグにまとめたノート。',
  'tag.listLabel': '「{tag}」タグの記事',
  'tag.moreTagsEyebrow': 'ほかのタグ',
  'tag.otherTagsNavLabel': 'ほかのブログタグ',
  'tag.allPosts': 'すべての記事',

  // Blog post
  'post.eyebrow': 'ブログ',
  'post.tocLabel': '目次',
  'post.contentsEyebrow': '目次',
  'post.adjacentLabel': '前後の記事',
  'post.previous': '前の記事',
  'post.next': '次の記事',
  'post.relatedEyebrow': '関連記事',
  'post.breadcrumbHome': 'ホーム',
  'post.breadcrumbBlog': 'ブログ',

  // Works index
  'works.title': '制作物',
  'works.description': '厳選したプロジェクトとケーススタディ — {site}。',
  'works.eyebrow': '制作物',
  'works.heading': '厳選したプロジェクトとケーススタディ。',
  'works.lead':
    'works コレクションは、説明文・使用技術・外部リンク・リポジトリ・サムネイル・並び順・公開日を型付きで扱います。',
  'works.listLabel': '厳選した制作物',

  // Work detail
  'work.eyebrow': '制作物',
  'work.visit': 'プロジェクトを見る',
  'work.repository': 'リポジトリを見る',
  'work.stackEyebrow': '技術構成',

  // About
  'about.title': 'プロフィール',
  'about.description': 'この {site} サイトを運営している人について。',
  'about.eyebrow': 'プロフィール',
  'about.heading': '仕事の背後にいる人を、落ち着いた筆致で。',
  'about.lead':
    'このページは、簡潔な経歴、仕事の哲学、そして考え方が伝わるいくつかの要素を置くための場所です。',
  'about.profileEyebrow': 'プロフィール',
  'about.profileHeading': '静かなシステム、明快な文章、長持ちするインターフェース。',
  'about.profileBody1':
    'プロダクト戦略、インターフェースの設計、技術文書の執筆にまたがって仕事をしています。共通しているのは構造です。複雑な内容を、目で追いやすく、信頼でき、手入れしやすい形にすること。',
  'about.profileBody2':
    'Astro Keel は、声高な個人ブランドを押し出さずに、こうした文脈を書き添える余白を残しています。このプレースホルダーを、具体的な経歴、現在の役割、仕事を形づくっている制約に置き換えてください。',
  'about.ledgerLabel': '経歴の概要',
  'about.focusTitle': 'いま取り組んでいること',
  'about.focusBody':
    '無駄のないコンテンツ基盤、ポートフォリオ、エディトリアルなプロダクトページの設計。',
  'about.backgroundTitle': 'これまでの経験',
  'about.backgroundBody':
    'フロントエンド実装、デザインシステム、技術者向けの執筆にわたる経験。',
  'about.contactTitle': '連絡先',
  'about.contactBody': '稼働状況、協業の希望、直接の連絡手段などをこの欄に。',
  'about.methodEyebrow': '進め方',
  'about.methodHeading': '見た目より先に、構造を。',
  'about.methodBody':
    'このテーマはページを作業文書のように扱います。まず階層、次にリズム、最後に視覚的な個性。細い罫線、ゆとりのある余白、書体のコントラストが、内容と競わずに佇まいを担います。',

  // Search
  'search.title': '検索',
  'search.description': '記事と制作物を検索 — {site}。',
  'search.eyebrow': '検索',
  'search.heading': '記事と制作物を探す。',
  'search.lead':
    'Pagefind による完全静的な検索です。索引はビルド時に生成され、バックエンドは要りません。',
  'search.sectionLabel': 'サイト内検索',
  'search.fallback':
    '検索インデックスはビルド時に生成されます。<code>npm run build</code> を実行し、プレビューでお試しください。開発サーバーでは利用できません。',

  // 404
  'notFound.title': 'ページが見つかりません',
  'notFound.description': 'お探しのページは存在しません。',
  'notFound.eyebrow': '404 — 見つかりません',
  'notFound.heading': 'このページは航路から外れました。',
  'notFound.lead':
    'アドレスが変わったか、はじめから存在しなかったのかもしれません。下のキールラインが、穏やかな水域へ戻る道です。',
  'notFound.linksLabel': '復帰用リンク',
  'notFound.home': 'ホームへ戻る',
  'notFound.blog': 'ブログを読む',
  'notFound.works': '制作物を見る',

  // Generated Open Graph images
  'og.blog': 'ブログ',
  'og.work': '制作物',
};
