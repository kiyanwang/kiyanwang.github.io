import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import content from '@originjs/vite-plugin-content';

export default defineConfig({
  plugins: [react(), content()],
  base: '/',
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
