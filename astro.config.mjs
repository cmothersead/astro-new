import path from "path";
import { fileURLToPath } from "url";

import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { readingTimeRemarkPlugin } from "./src/utils/frontmatter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        icon({
            include: {
                tabler: ["*"],
                "flat-color-icons": [
                    "template",
                    "gallery",
                    "approval",
                    "document",
                    "advertising",
                    "currency-exchange",
                    "voice-presentation",
                    "business-contact",
                    "database",
                ],
            },
        }),
    ],

    markdown: {
        remarkPlugins: [readingTimeRemarkPlugin],
    },

    vite: {
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "./src"),
            },
        },
    },
});
