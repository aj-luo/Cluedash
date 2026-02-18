import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/Cluedash",
  server: {
    proxy: {
      '/api': {
        target: 'https://3i8ztttxmf.execute-api.us-east-2.amazonaws.com/prod',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // Use only if needed
      },
    },
  },
})