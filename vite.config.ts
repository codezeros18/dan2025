import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/dan2025/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          framerMotion: ['framer-motion'],
          reactIcons: ['react-icons'],	
        }
      }
    }
  },
  plugins: [react(),
    tailwindcss()
  ],
})
