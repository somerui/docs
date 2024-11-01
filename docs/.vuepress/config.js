import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: '/somerui.svg',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
  locales: {

    '/': {
      lang: 'en-US',
      title: 'SOMERUi Official Documentation',
      description: 'The official documentation site of somerui.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'SOMERUi 官方文档',
      description: '由somerui提供的个人文档站点。',
    },
  }
})
