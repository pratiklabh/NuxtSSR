// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: true,

  // Set the target to 'server' for SSR
  target: 'server',

  // Add any other necessary settings
  head: {
    title: 'My SSR App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
