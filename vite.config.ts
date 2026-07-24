import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project Pages URL: https://aegion-dynamic.github.io/ruchi-website/
  base: '/ruchi-website/',
})
