import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import tailwindcss from  "tailwindcss"
import autoprefixer from "autoprefixer"
import { visualizer } from "rollup-plugin-visualizer";
import vitePluginRequire from 'vite-plugin-require'
import path from 'path'

const ReactCompilerConfig = { /* ... */ };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
    vitePluginRequire.default(),
    mdx(),
    visualizer({
      gzipSize: true,
      emitFile: true,
      brotliSize: false,
      filename: "stats.html",
      open: true
    }),
  ],
  css: {
    modules: {
      generateScopedModules: true
    },
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'components': path.resolve(__dirname, './src/components'),
      'app': path.resolve(__dirname, './src/app'),
      'pages': path.resolve(__dirname, './src/pages'),
      'utils': path.resolve(__dirname, './src/utils'),
    }
  },
  // server: {
  //   proxy: {
  //     '/eden': {
  //       target: 'https://xinyuzone.cn',
  //       changeOrigin: true
  //     }
  //   }
  // }
})
