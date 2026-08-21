import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Custom domain (maaruchi.com) serves this project Pages site at the root.
  // github.io/ruchi-website redirects to the custom domain.
  base: '/',
})
