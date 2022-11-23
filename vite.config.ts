import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          // style: (name) => `antd/lib/${name}/style/index.less`
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],

  server: {
    cors: true,
    proxy: {
      '^/api': {
        target: 'http://172.20.2.82:8989', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
        // 重写 less 变量，定制样式
        modifyVars: {
          '@primary-color': 'rgb(54,117,83)' // 全局样式
        }
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      utils: path.resolve(__dirname, 'src/utils'),
      assets: path.resolve(__dirname, 'src/assets'),
      constant: path.resolve(__dirname, 'src/constant'),
      context: path.resolve(__dirname, 'src/context'),
      types: path.resolve(__dirname, 'src/types'),
      router: path.resolve(__dirname, 'src/router'),
      data: path.resolve(__dirname, 'src/data'),
      api: path.resolve(__dirname, 'src/api')
    }
  }
});
