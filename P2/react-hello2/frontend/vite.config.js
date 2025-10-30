import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.FRONTEND_PORT) || 4173,
    allowedHosts: true
  }
});
