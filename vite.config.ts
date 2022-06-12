import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  base: '/',
  // https://vitejs.dev/guide/assets.html#the-public-directory
  publicDir: './statics/public',
  // https://vitejs.dev/config/#envdir
  envDir: '../',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  clearScreen: false,
  server: {
    open: true
  },
  build: {
    // https://vitejs.dev/config/#build-outdir
    outDir: '../dist',
    // https://vitejs.dev/config/#build-assetsdir
    assetsDir: './statics',
    emptyOutDir: true
  },
  preview: {
    port: 624,
    open: true
  }
})
