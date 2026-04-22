import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages deployment at
// https://asomlith04.github.io/andrew-somlith-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/andrew-somlith-portfolio/',
})
