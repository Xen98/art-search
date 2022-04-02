import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/art-search/',
  define: {
    'process.env': {}
  },
  plugins: [
    react()
  ],
  server: {
    host: true
  },
  build: {
    outDir: 'docs'
  }
})
