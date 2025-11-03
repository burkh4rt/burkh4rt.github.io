import path, { resolve } from "path";
import react from "@vitejs/plugin-react";
import fg from "fast-glob";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { VitePWA } from "vite-plugin-pwa";
import Sitemap from "vite-plugin-sitemap";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  build: {
    assetsInlineLimit: 102400,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        links: resolve(__dirname, "links.html"),
        pubs: resolve(__dirname, "pubs.html"),
        cv: resolve(__dirname, "cv.html"),
        404: resolve(__dirname, "404.html"),
      },
    },
    target: "es2019",
    // cssMinify: false,
    // minify: false,
  },
  esbuild: {
    legalComments: "none",
  },
  optimizeDeps: {
    exclude: ["fsevents"],
  },
  plugins: [
    imagetools(),
    react(),
    Sitemap({
      hostname: "https://burkh4rt.github.io",
      dynamicRoutes: (() => {
        const publicDir = path.resolve(__dirname, "public");
        const pdfs = fg.sync("**/*.pdf", { cwd: publicDir });
        return pdfs.map((f) => "/" + f.replace(/\\/g, "/") + ".pdf"); // a hack; one of the .pdf's will get stripped
      })(),
    }),
    svgr(),
    VitePWA({
      includeAssets: ["**/*.svg", "**/cv.pdf", "**/*.webp"],
      registerType: "autoUpdate",
      // devOptions: {
      //   enabled: true,
      // },
      manifest: {
        name: "Michael Burkhart's Site",
        short_name: "burkh4rt's homepage",
        description: "Snippets from work and life, with links",
        lang: "en",
        start_url: "/",
        background_color: "#800000",
        theme_color: "#800000",
        display: "standalone",
        icons: [
          {
            purpose: "any maskable",
            src: "m.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
          {
            purpose: "any",
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            purpose: "any",
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:jpeg|jpg|avif|webp)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
          {
            urlPattern: /\.(?:otf|woff|woff2)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "fonts-cache",
              expiration: {
                maxEntries: 5,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
        ],
        navigateFallbackDenylist: [/^(?!.*cv\.pdf$).*\.pdf$/],
      },
    }),
  ],
  server: { port: 8000 },
  ssr: {
    external: ["fsevents"],
  },
});
