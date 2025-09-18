import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router/plugin";
import postcssGlobalData from "@csstools/postcss-global-data";
import postcssPresetEnv from "postcss-preset-env";
import browsers from "@github/browserslist-config";
import svgr from "vite-plugin-svgr";
import { globSync } from "glob";
import { VitePWA } from "vite-plugin-pwa";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    generouted(),
    svgr(),
    imagetools(),
    VitePWA({
      includeAssets: [
        "**/*.otf",
        "**/*.woff",
        "**/*.svg",
        "**/cv.pdf",
        "**/*.webp",
      ],
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
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
            urlPattern: /\.(?:jpeg|jpg|avif)$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
          // {
          //   urlPattern: /\.(?:otf|woff)$/,
          //   handler: "StaleWhileRevalidate",
          //   options: {
          //     cacheName: "fonts-cache",
          //     expiration: {
          //       maxEntries: 5,
          //       maxAgeSeconds: 60 * 60 * 24 * 365,
          //     },
          //   },
          // },
        ],
        navigateFallbackDenylist: [/^(?!.*cv\.pdf$).*\.pdf$/],
      },
    }),
  ],
  server: { port: 8000 },
  optimizeDeps: {
    exclude: ["fsevents"],
  },
  ssr: {
    external: ["fsevents"],
  },
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: globSync("node_modules/@primer/primitives/dist/css/**/*.css"),
        }),
        postcssPresetEnv({
          stage: 2,
          browsers,
          features: {
            "nesting-rules": {
              noIsPseudoSelector: true,
            },
            "focus-visible-pseudo-class": false,
            "logical-properties-and-values": false,
          },
        }),
      ],
    },
  },
});
