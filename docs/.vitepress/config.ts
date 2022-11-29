import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TresJS',
  description: 'Declarative ThreeJS using Vue Components',
  head: [['link', { rel: 'icon', type: 'image/svg', href: '/favicon.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    sidebar: [
      {
        text: 'Guide',
        items: [
          // This shows `/guide/index.md` page.
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Your first Scene', link: '/guide/your-first-scene' },
        ],
      },
      /*    {
        text: 'API',
      },
      {
        text: 'Examples',
      }, */
      {
        text: 'Advanced',

        items: [{ text: 'Extending', link: '/advanced/extending' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tresjs/tres' },
      { icon: 'twitter', link: 'https://twitter.com/alvarosabu' },
    ],
  },
})
