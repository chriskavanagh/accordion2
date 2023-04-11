import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  plugins: [react()],

  compilerOptions: {
    baseUrl: "src",
  },
  include: ["src"],
});
