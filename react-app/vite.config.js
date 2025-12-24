import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// Update base if your repo name changes
const base = '/nextjs-training/'

export default defineConfig({
  base,
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: '../css', dest: '' },
        { src: '../fonts', dest: '' },
        { src: '../images', dest: '' },
        { src: '../js', dest: '' },
        { src: '../media', dest: '' }
      ]
    })
  ],
  server: {
    port: 5173
  }
})
