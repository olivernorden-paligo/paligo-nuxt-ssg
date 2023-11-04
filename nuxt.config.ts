// https://nuxt.com/docs/api/configuration/nuxt-config
// const route = useRoute()

const routes = [
  '/',
  'paligo-1',
  'paligo-2',
]

// prerenderRoutes(routes);
// import 'vue/dist/vue.esm-bundler'

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    'vue': 'vue/dist/vue.esm-bundler.js',
  },
  components: {
    "dirs": [
      {
        "path": "~/components/xml",
        "global": true
      },
      "~/components"
    ]
  }
})
