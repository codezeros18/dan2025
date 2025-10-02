import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  base: '/dan2025/',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          framerMotion: ['framer-motion'],
          reactIcons: ['react-icons'],
        }
      }
    }
  },
  plugins: [react(), tailwindcss()],
})
