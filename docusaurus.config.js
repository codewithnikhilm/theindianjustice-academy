// @ts-check
// Drop-in replacement for: docusaurus.config.js
// Changes vs. the template default:
//   - Real site title / tagline / metadata (was "My Site" / "Dinosaurs are cool")
//   - Navbar + footer links point at YOUR repo (were facebook/docusaurus)
//   - editUrl points at your repo so "Edit this page" works
//   - Footer rebuilt around your actual subjects
//   - Copyright uses your site name

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Indian Justice Academy',
  tagline: 'Learn Law. Think Justice.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://codewithnikhilm.github.io',
  baseUrl: '/theindianjustice-academy/',

  organizationName: 'codewithnikhilm',
  projectName: 'theindianjustice-academy',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/codewithnikhilm/theindianjustice-academy/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/codewithnikhilm/theindianjustice-academy/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo11.png',
      metadata: [
        {
          name: 'description',
          content:
            'Free law notes, case laws, bare acts and previous year questions for Indian law students — Land Laws, Registration Act, CPC, BNS and more.',
        },
        {
          name: 'keywords',
          content:
            'law notes, Indian law, land laws, registration act, CPC, BNS, jurisprudence, transfer of property, labour law',
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'The Indian Justice Academy',
        logo: {
          alt: 'The Indian Justice Academy',
          src: 'img/logo11.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Notes',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/codewithnikhilm/theindianjustice-academy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Study',
            items: [
              {
                label: 'Start here',
                to: '/docs/intro',
              },
              {
                label: 'Land Laws',
                to: '/docs/category/land-laws',
              },
              {
                label: 'Registration Act',
                to: '/docs/registration-act/registration-establishments',
              },
              {
                label: 'Professional Ethics',
                to: '/docs/professional-ethics/legal-profession-in-india',
              },
            ],
          },

          {
            title: 'Site',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/codewithnikhilm/theindianjustice-academy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Indian Justice Academy. Notes for students, freely shared.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
