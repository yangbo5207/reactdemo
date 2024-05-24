import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import requireTransform from 'vite-plugin-require-transform' // 1. 引入插件

const ReactCompilerConfig = { /* ... */ };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ]
      },
    }),
    requireTransform({
      fileRegex: /.js$|.jsx$/,
  }),
  ],
  css: {
    modules: {
      generateScopedModules: true
    }
  }
})
