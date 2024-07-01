import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src"),
      "@style": resolve(__dirname, "src/styles/style.css"),
      "@routes": resolve(__dirname, "src/routes"),
      "@pages": resolve(__dirname, "src/pages"),
      "@types": resolve(__dirname, "src/types"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@components": resolve(__dirname, "src/components"),
      "@configs": resolve(__dirname, "src/configs"),
      "@utils": resolve(__dirname, "src/utils"),
      "@contexts": resolve(__dirname, "src/contexts"),
      "@theme": resolve(__dirname, "src/theme"),
      "@constants": resolve(__dirname, "src/constants"),
    },
  },
  plugins: [react()],
});
