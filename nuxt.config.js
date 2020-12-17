export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "game-coins",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"
      // }
    ],
    script: [{ src: "https://widget.cloudinary.com/v2.0/global/all.js" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/veevalidate",
    {
      src: "@/plugins/DataTable",
      mode: "client"
    },
    { src: "@/plugins/vuex-persist", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/tailwindcss",
    ["@nuxtjs/dotenv", { systemvars: true }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["nuxt-buefy", "@nuxtjs/axios", "@nuxtjs/auth"],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.NUXT_APP_API_URL
  },
  env: {
    NUXT_APP_API_URL: process.env.NUXT_APP_API_URL
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "access_token"
          },
          user: {
            url: "/auth/user"
          }
        }
      }
    },

    redirect: {
      login: "/auth/login",
      logout: "/auth/login",
      home: "/dashboard"
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
