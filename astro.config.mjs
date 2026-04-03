import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = process.env.SITE_URL ?? "https://username.github.io";
const rawBase = process.env.BASE_PATH?.trim() ?? "";
const base =
  rawBase === "" || rawBase === "/"
    ? "/"
    : rawBase.startsWith("/")
      ? rawBase
      : `/${rawBase}`;

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false })]
});
