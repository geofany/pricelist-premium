// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in", // default
    },
    pageTransition: {
      name: "fade",
      mode: "out-in", // default
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
