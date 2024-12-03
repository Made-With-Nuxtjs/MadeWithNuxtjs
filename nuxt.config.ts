// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@vueuse/nuxt'],
  image: {
    quality: 80,
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