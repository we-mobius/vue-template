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
    // https://vitejs.dev/config/#resolve-alias
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./', import.meta.url)) },
      { find: 'Src', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: 'Statics', replacement: fileURLToPath(new URL('./src/statics', import.meta.url)) },
      { find: 'Styles', replacement: fileURLToPath(new URL('./src/statics/styles', import.meta.url)) },
      { find: 'Images', replacement: fileURLToPath(new URL('./src/statics/images', import.meta.url)) },
      { find: 'Elements', replacement: fileURLToPath(new URL('./src/elements', import.meta.url)) },
      { find: 'Components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: 'Views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
      { find: 'Services', replacement: fileURLToPath(new URL('./src/services', import.meta.url)) }
    ]
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
