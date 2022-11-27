import axios from 'axios'

const bodyParser = require('body-parser')
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WD Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool Web Development Blog' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-component.js',
    '~plugins/date-filter.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
 
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-1b586-default-rtdb.firebaseio.com',
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-1b586-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyDPMfVEWQyfr77GnvU-CLmRcfO41e5x1Ew' 
  },

  // router: {
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: '*',
    //     component: resolve(__dirname, 'pages/index.vue')
    //   })
    // }

    // linkActiveClass: 'active'

    // middleware: 'log',
  // },

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  // generate: {
  //   routes: function() {
  //     return axios.get('https://nuxt-blog-1b586-default-rtdb.firebaseio.com/posts.json')
  //       .then(res => {
  //         const routes = []
  //         for (const key in res.data) {
  //           routes.push({route: '/post/' + key, payload: {
  //             postData: res.data[key]
  //           }})
  //         }
  //         return routes
  //       })
  //   }
  // }
}
