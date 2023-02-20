import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
import { fileURLToPath } from 'url'
const file = fileURLToPath(import.meta.url)
const dir = path.dirname(file).replace(/\\+/, '/')

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': `${path.resolve(dir, 'src/lib/@components')}`,
      '@stores': `${path.resolve(dir, 'src/lib/@stores')}`,
      '@t': `${path.resolve(dir, 'src/lib/@types')}`,
      '@scripts': `${path.resolve(dir, 'src/lib/@scripts')}`,
      '@constants': `${path.resolve(dir, 'src/lib/@constants.ts')}`,
      '@assets': `${path.resolve(dir, 'src/lib/@assets.ts')}`,
    },
  },
  build: {
    outDir: 'dist',
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    https: false,
    host: '::',
    proxy: {
      '^/api/.*': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: false,
        secure: false,
        ws: true,
      },
    },
  },
})
