import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',               // you can keep 'dist' or rename
  },
  base: '/',                      // ✅ ensures URLs resolve correctly in ROOT
})
