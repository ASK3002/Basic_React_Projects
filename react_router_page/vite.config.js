import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Basic_React_Projects/react_router_page/', // ✅ must match your GitHub Pages sub-path
  plugins: [react()],
});
