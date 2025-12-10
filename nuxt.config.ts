// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    nitro: {
        preset: 'static'
    },
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@nuxt/content', 
        '@nuxt/fonts',
        '@bootstrap-vue-next/nuxt'
    ],
    css: [
    'bootstrap/dist/css/bootstrap.min.css'
    ],
    devServer: {
        host: 'localhost',
        port: 3001
    }
})