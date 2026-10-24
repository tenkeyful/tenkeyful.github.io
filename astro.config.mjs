// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { rehypeGithubAlerts } from "rehype-github-alerts";

// https://astro.build/config
export default defineConfig({
	site: "https://bienpensant.com",
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "github-light",
		},
		processor: unified({
			rehypePlugins: [rehypeGithubAlerts],
		}),
	},
});
