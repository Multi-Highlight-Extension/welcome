import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    manifest_version: 3,
    name: "Multi Highlight Extension",
    version: "1.0.0",
    description: "Highlight words with Multi Highlight Extension",
    permissions: ["tabs", "storage", "scripting"],
    host_permissions: ["http://*/*", "https://*/*"],
    content_scripts: [
      {
        matches: ["<all_urls>"],
        js: ["content.js"],
      },
    ],
    background: {
      service_worker: "background.js",
    },
  },
});
