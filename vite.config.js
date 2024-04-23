import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import VueDevTools from 'vite-plugin-vue-devtools'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    vue(),
    VueRouter({
      importMode: (filepath) => filepath.includes('index') ? 'sync' : 'async'
    }),
    VueDevTools()
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
