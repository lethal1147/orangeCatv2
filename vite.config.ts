import path from "path";
import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
