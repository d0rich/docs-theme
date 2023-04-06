import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['@nuxt-themes/typography', '@d0rich/nuxt-design-system'],
  app: {
    pageTransition: {
      name: 'section',
      mode: 'out-in'
    }
  },
  nitro: {
    prerender: {
      routes: ['/favicon.ico', '/og/image.jpg', '/CNAME']
    },
    serverAssets: [
      {
        baseName: 'server:templates',
        dir: join(currentDir, './server/assets/templates')
      }
    ]
  },
  runtimeConfig: {
    public: {
      isDev: process.env.NODE_ENV === 'development',
      isProd: process.env.NODE_ENV === 'production'
    }
  },
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'one-dark-pro'
      }
    },
    // sources: {
    //   fa: {
    //     prefix: '/', // All contents inside this source will be prefixed with `/fa`
    //     driver: 'fs',
    //     base: './',
    //     ignore: /.*(?<!README\.md)$/
    //   }
    // },
    markdown: {
      remarkPlugins: ['@akebifiky/remark-simple-plantuml'],
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank'
        }
      }
    }
  },
  pinceau: {
    preflight: false
  }
})