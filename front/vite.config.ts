import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg' })],
  resolve: {
    alias: {
      // '@scss': fileURLToPath(new URL('src/assets/scss', import.meta.url)),
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@bootstrap': fileURLToPath(
        new URL('node_modules/bootstrap', import.meta.url)
      )
    }
  },
})
