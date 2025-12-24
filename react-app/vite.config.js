import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// Use relative base to work reliably under GitHub Pages subpaths
const base = './'

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
