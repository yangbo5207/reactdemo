import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import requireTransform from 'vite-plugin-require-transform' // 1. 引入插件


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    requireTransform({
      fileRegex: /.js$|.jsx$/,
  }),
  ],
})
