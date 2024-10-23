// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Starter',
      meta: [
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
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-security',
  ],
})
