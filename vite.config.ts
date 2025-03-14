import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// eslint-disable-next-line
// @ts-ignore
import eslintPlugin from '@nabla/vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
