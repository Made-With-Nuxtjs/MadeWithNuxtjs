// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    '@nuxthub/core'
  ],
  hub: {
    ai: false,
    blob: false,
    browser: false,
    cache: false,
    database: false,
    kv: false,
    remote: false
  },
  nitro: {
    experimental: {
      openAPI: false
    }
  },
  site: {
    url: 'https://www.madewithnuxtjs.com',
    name: 'Made With Nuxtjs',
    canonicalQueryWhitelist: ['myCustomQuery'],
    redirectToCanonicalSiteUrl: true
  },
  seo: {
    meta: {
      description: 'Made With Nuxtjs',
      themeColor: [
        { content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],
      twitterCreator: '@ictlayer',
      twitterSite: '@ictlayer',
      author: 'ICT Layer',
      colorScheme: 'dark light',
      applicationName: 'Made With Nuxtjs',
      // Nuxt SEO Utils already sets the below tags for you
      ogSiteName: 'Made With Nuxtjs',
      ogLocale: 'en_US',
      ogType: 'website',
      ogUrl: 'https://www.madewithnuxtjs.com',
      ogTitle: 'Made With Nuxtjs',

      // Other Nuxt SEO modules handles these
      // ogImage: 'https://www.madewithnuxtjs.com/logo.png',
      robots: 'index, follow',
    }
  },
  image: {
    quality: 80,
  },
  icon: {
    serverBundle: {
      collections: ['mdi'] // <!--- this
    },
  },
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue|typescript)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  }
})