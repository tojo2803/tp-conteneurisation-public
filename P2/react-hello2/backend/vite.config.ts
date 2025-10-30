import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    ssr: 'src/main.ts',
    outDir: 'dist',
    emptyOutDir: true,
    target: 'node18',
    rollupOptions: {
      external: [
        '@nestjs/common',
        '@nestjs/core',
        '@nestjs/platform-express',
        'mysql2',
        'rxjs'
      ],
      output: {
        entryFileNames: 'server.js',
        format: 'cjs'
      }
    },
    sourcemap: true
  }
});
