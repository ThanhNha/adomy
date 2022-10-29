// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
    target: 'static',
    components: {
        dirs: [
          '~/components',
          {
            path: '~/components/shin/',
            prefix: 'S',
          },
        ],
      },
    tailwindcss: {
    cssPath: '~/assets/scss/global.scss',
    configPath: '~/tailwind.config.js',
    viewer: false,
    },
    vite: {
        plugins: [svgLoader()]
      },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
      ],

})
