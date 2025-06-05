import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Basic_React_Projects/counterUsingReact/',
  plugins: [react()],
})
