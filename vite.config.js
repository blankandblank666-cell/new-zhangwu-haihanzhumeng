import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // <--- 加上这一行！用 './' 最简单，通用性最强
  build: {
    assetsDir: '' // ★★★ 新增这一行：让 JS/CSS 文件不进文件夹，直接放外面
  }
})
