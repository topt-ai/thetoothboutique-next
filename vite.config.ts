import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path, {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          invisalign: resolve(__dirname, 'invisalign.html'),
          brackets: resolve(__dirname, 'brackets.html'),
          blanqueamiento: resolve(__dirname, 'blanqueamiento.html'),
          review: resolve(__dirname, 'review.html'),
          careers: resolve(__dirname, 'careers.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
