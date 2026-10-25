import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const rawBase = process.env.BASE_PATH ?? "/";
const base =
  rawBase === "" || rawBase === "/"
    ? "/"
    : rawBase.endsWith("/")
      ? rawBase.slice(0, -1)
      : rawBase;

export default defineConfig({
  site: "https://www.liggas.sk",
  base,
  trailingSlash: "always",
  compressHTML: true,
  server: {
    host: "127.0.0.1",
    port: 4321,
  },
  integrations: [sitemap()],
});
