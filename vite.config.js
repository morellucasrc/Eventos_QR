// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Cambio el directorio de salida a 'dist' para Vercel
  },
  server: {
    proxy: {
      // Si estás usando un backend local para desarrollo, puedes configurar el proxy aquí
      '/api': 'http://localhost:5000',
    },
  },
});
