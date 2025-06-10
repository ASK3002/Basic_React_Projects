// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  basename: '/react_router_page',  // <- IMPORTANT
  plugins: [react()],
})
