import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { "process.env": process.env },
  build: { outDir: "./dist" },
  base: "/",
  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "src/data"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@redux": path.resolve(__dirname, "src/components/redux"),
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
