import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Keep SVG logos as separate (lazy-loaded, cacheable) files instead of
    // inlining them into the JS bundle; other small assets use Vite's default.
    assetsInlineLimit: (file) => (file.endsWith(".svg") ? false : undefined),
  },
});
