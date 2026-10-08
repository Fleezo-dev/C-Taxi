import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'gh-pages-spa-fallback',
        closeBundle() {
          const distPath = path.resolve(rootDir, 'dist');
          const indexPath = path.join(distPath, 'index.html');
          const notFoundPath = path.join(distPath, '404.html');
          if (fs.existsSync(indexPath)) {
            try {
              fs.copyFileSync(indexPath, notFoundPath);
            } catch {
              // Silently ignore if filesystem restricts
            }
          }
          const publicAssetsPath = path.resolve(rootDir, 'public/assets');
          const distAssetsPath = path.resolve(distPath, 'assets');
          if (fs.existsSync(publicAssetsPath)) {
            try {
              fs.cpSync(publicAssetsPath, distAssetsPath, { recursive: true });
            } catch {
              // Silently ignore
            }
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': rootDir,
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/leaflet')) {
              return 'vendor-leaflet';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-icons';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
