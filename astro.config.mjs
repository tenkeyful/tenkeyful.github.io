// @ts-check
import { defineConfig } from "astro/config";
import { unified, rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeLinkFavicons from "rehype-link-favicons";
import { rehypeGithubAlerts } from "rehype-github-alerts";
import remarkYoutube from "remark-youtube";

// https://astro.build/config
export default defineConfig({
  site: "https://bienpensant.com",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-light",
    },
    processor: unified({
      remarkPlugins: [remarkYoutube],
      rehypePlugins: [
        rehypeGithubAlerts,
        [
          rehypeLinkFavicons,
          {
            size: 15,
            ignoreHosts: ["bienpensant.com"],
          },
        ],
        rehypeHeadingIds,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            content: {
              type: "element",
              tagName: "svg",
              properties: {
                xmlns: "http://www.w3.org/2000/svg",
                width: 16,
                height: 16,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                ariaHidden: true,
              },
              children: [
                {
                  type: "element",
                  tagName: "path",
                  properties: {
                    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                  },
                  children: [],
                },
                {
                  type: "element",
                  tagName: "path",
                  properties: {
                    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                  },
                  children: [],
                },
              ],
            },
            properties: {
              className: ["heading-anchor"],
              ariaLabel: "Link to this section",
            },
          },
        ],
      ],
    }),
  },
});
