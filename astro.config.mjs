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
  build: { format: "file" },
  compressHTML: true,
  integrations: [
    react(),
    AstroPWA(),
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
    playformCompress({ Image: false }),
  ],
  server: ({ command }) => {
    return {
      port: command === "dev" ? 8000 : 9000,
    };
  },
  site: "https://burkh4rt.github.io",
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
