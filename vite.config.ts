import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: { "process.env": process.env },
  build: { outDir: path.resolve(__dirname, "dist") },
  base: "/exchangeApp/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    alias: {
      "@variables": path.resolve(__dirname, "src/helpers/_variables.scss"),
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@store": path.resolve(__dirname, "src/store"),
      "@storeCurrencyRate": path.resolve(__dirname, "src/store/currency-rate"),
      "@slices": path.resolve(__dirname, "src/components/redux/slices"),
      "@selectors": path.resolve(__dirname, "src/components/redux/selectors"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@footer": path.resolve(__dirname, "src/components/footer"),
      "@header": path.resolve(__dirname, "src/components/header"),
      "@card": path.resolve(__dirname, "src/components/exchange-card"),
      "@custom-inputs": path.resolve(__dirname, "src/components/custom-inputs"),
    },
  },
});
