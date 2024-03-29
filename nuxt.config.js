export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Mentoring',
    bodyAttrs: {
      class: 'font-raleway antialiased bg-white overflow-x-hidden'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/google-fonts-module
    ['@nuxtjs/google-fonts',
      {
        families: { Raleway: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
        display: 'swap',
        download: true,
        stylePath: 'scss/base/_fonts.scss',
        overwriting: false
      }]
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/scss/main.scss'
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    linkActiveClass: 'text-secondary-500 hover:text-secondary-600'
  }
}
