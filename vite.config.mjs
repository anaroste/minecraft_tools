import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

export default defineConfig(() => ({
  // base: './',
  base: '/minecraft_tools/',
  build: {
    outDir: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/i18n/locales/texts/*.json'),
      strictMessage: false,
    }),
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
  },
}))
