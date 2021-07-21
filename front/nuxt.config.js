export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtMay2021',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css' }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/sass/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Simple usage
    //'@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  proxy: {
    '/api/v1': { target: 'http://3.129.128.9:5000/', pathRewrite: {'^/api/v1': ''} }
  },

  //ssr: false,
  loading: {
    color: 'DodgerBlue',
    height: '10px',
    continuous: true
  }
}
