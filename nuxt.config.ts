// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      site: {
        url: 'https://your-site-url.com', // replace with your actual site URL
      },
    },
  },
  app: {
    head: {
      title: 'Nuxt Starter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description', content: 'Opinionated Nuxt Starter'
        }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-security',
    '@nuxt/fonts'
  ],
})
