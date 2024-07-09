import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

export default defineConfig(() => ({
  base: './',
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, '../build'),
    watch: {},
  },
  plugins: [
    vue(),
    AutoImport({
      include: [/\.js$/, /\.vue$/],
      imports: ['vue', 'vuex', 'vue-i18n', 'vue-router', '@vueuse/core'],
      dirs: ['./src/composables'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    watch: {
      usePolling: true,
    },
  },
}))
