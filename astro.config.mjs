import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";
import fg from "fast-glob";
import { imagetools } from "vite-imagetools";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  base: "/",
  build: { format: "file" },
  compressHTML: true,
  integrations: [
    playformCompress({ Image: false }),
    (await import("@playform/inline")).default(),
    react(),
    AstroPWA({
      // includeAssets: ["**/*.svg", "**/cv.pdf", "**/*.webp", "**/*.png"],
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
      registerType: "autoUpdate",
      // workbox: {
      //   runtimeCaching: [
      //     {
      //       urlPattern: /\.(?:jpeg|jpg|avif|webp)$/i,
      //       handler: "NetworkFirst",
      //       options: {
      //         cacheName: "images-cache",
      //         expiration: {
      //           maxEntries: 100,
      //           maxAgeSeconds: 60 * 60 * 24 * 365,
      //         },
      //       },
      //     },
      //     {
      //       urlPattern: /\.(?:otf|woff|woff2)$/i,
      //       handler: "NetworkFirst",
      //       options: {
      //         cacheName: "fonts-cache",
      //         expiration: {
      //           maxEntries: 5,
      //           maxAgeSeconds: 60 * 60 * 24 * 365,
      //         },
      //       },
      //     },
      //   ],
      // },
    }),
    sitemap({
      customPages: (() => {
        const publicDir = path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "public",
        );
        const pdfs = fg.sync("**/*.pdf", { cwd: publicDir });
        return pdfs.map(
          (f) => "https://burkh4rt.github.io/" + f.replace(/\\/g, "/"),
        );
      })(),
    }),
  ],
  output: "static",
  prefetch: {
    prefetchAll: true,
  },
  server: ({ command }) => {
    return {
      port: command === "dev" ? 8000 : 9000,
    };
  },
  site: "https://burkh4rt.github.io",
  trailingSlash: "never",
  redirects: {
    "/cv": "https://burkh4rt.github.io/cv.pdf",
  },
  vite: {
    plugins: [svgr(), imagetools()],
    ssr: {
      noExternal: ["@primer/react"],
    },
  },
});
