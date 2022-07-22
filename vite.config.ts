import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
// import postcsspxtoviewport from 'postcss-px-to-viewport'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      utils: path.resolve(__dirname, 'src/utils'),
      assets: path.resolve(__dirname, 'src/assets'),
      constant: path.resolve(__dirname, 'src/constant'),
      context: path.resolve(__dirname, 'src/context'),
      pic: path.resolve(__dirname, 'src/assets/pic'),
      types: path.resolve(__dirname, 'src/types'),
      router: path.resolve(__dirname, 'src/router')
    }
  }
});
