import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
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
