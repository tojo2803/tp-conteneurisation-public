// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envDir = resolve(__dirname, '..'); // ../.env

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, envDir, ''); // load all vars from ../.env
  const port = Number(env.FRONTEND_PORT) || 4173;

  console.log('FRONTEND_PORT USED:', port);

  return {
    envDir,
    plugins: [react()],
    server: {
      host: true,
      port,
      allowedHosts: true,
    },
    preview: {
      host: true,
      port,
      allowedHosts: true,
    },
    // Optional: avoid libraries expecting process.env
    define: { 'process.env': {} },
  };
});
