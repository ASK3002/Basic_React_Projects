import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Counter-Using-React/',  // Add this line with your repo name, including slashes
  plugins: [react()],
})
