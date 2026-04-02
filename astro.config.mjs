import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = process.env.SITE_URL ?? "https://username.github.io";
const base = process.env.BASE_PATH ?? "/aemportfolio";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false })]
});
