// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      include: ["pdfjs-dist"],
      esbuildOptions: {
        supported: {
          "top-level-await": true,
        },
        target: "esnext",
      },
    },
  },
  build: {
    transpile: [
      (ctx) => (ctx.isServer ? "pdfjs-dist" : false),
      (ctx) => (ctx.isServer ? "@vue-pdf-viewer/viewer" : false),
    ],
  },
});
