import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgSite = repository.endsWith(".github.io");
const base = process.env.PUBLIC_BASE_PATH ??
  (repository && !isUserOrOrgSite ? `/${repository}` : "/");
const site = process.env.SITE_URL ?? "https://pratheekps.github.io";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
