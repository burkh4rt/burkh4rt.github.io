import react from "@astrojs/react";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  server: ({ command }) => {
    return {
      port: command === "dev" ? 8000 : 9000,
    };
  },
  integrations: [react(), AstroPWA()],
  vite: {
    ssr: {
      noExternal: ["@primer/react"],
    },
    plugins: [svgr()],
  },
});
