// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path'
export default defineNuxtConfig({
    target: 'static',
    components: [
      {
        path: '~/components', // will get any components nested in let's say /components/nested
        pathPrefix: false,
      },
    ],
    tailwindcss: {
    cssPath: '~/assets/scss/global.scss',
    configPath: 'tailwind.config',
    viewer: false,
    exposeConfig: false,
    injectPosition: 0,
    },
    vite: {
        plugins: [svgLoader({
          defaultImport: 'raw',
        })],
       
      },
      alias: {
        'icons': resolve(__dirname, './assets/icons'),
      },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
      ],

})
