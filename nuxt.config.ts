import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'uendelcouto.dev',
        link: [
          {
            href: 'https://fonts.googleapis.com',
            rel: 'preconnect',
          },
          {
            href: 'https://fonts.gstatic.com',
            rel: 'preconnect',
          },
          {
            href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&display=swap',
            rel: 'stylesheet',
          },
          {
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Oswald:wght@200;300&display=swap',
            rel: 'stylesheet',
          },
        ]
    },
    build: {
      postcss: {
        postcssOptions: require("./postcss.config.js"),
      },
    },
});
