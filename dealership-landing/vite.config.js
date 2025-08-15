import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ai-agent-car-dealerships/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
