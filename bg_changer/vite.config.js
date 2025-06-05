import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Basic_React_Projects/bg_changer/', // 👈 this is critical
  plugins: [react()],
})
