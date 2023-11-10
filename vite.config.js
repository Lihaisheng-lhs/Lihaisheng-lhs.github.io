import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  optimizeDeps: {
    include: ["file-with-jsx.jsx"], // 在这里添加包含 JSX 的文件
  },
  loader: {
    '.js': 'jsx',
  },
  alias: {
    '/@': resolve(__dirname, 'src'),
  },
  plugins: [vue(), react()],
})
