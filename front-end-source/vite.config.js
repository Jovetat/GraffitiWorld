import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
// Antd 组件按需注入
import ViteComponents from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
    {
      name: 'vite-plugin-antd',
      apply: 'serve',
      transform: (code, id) => {
        if (/src\/main.js$/.test(id)) {
          const finalCode =
            `import Antd from 'ant-design-vue';import 'ant-design-vue/dist/antd.less';${code}`.replace(
              'createApp(App)',
              'createApp(App).use(Antd)',
            )
          return {
            code: finalCode,
            map: null,
          }
        }
      },
    },
    process.env.NODE_ENV === 'production'
      ? ViteComponents({
          resolvers: [
            AntDesignVueResolver({
              importStyle: 'less',
              // resolveIcons: true,
            }),
          ],
          include: [/\.vue$/, /\.jsx?$/],
        })
      : {},
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#297373',
          'text-color': '#39393A',
          'layout-body-background': '#E6E6E6',
          'layout-sider-background-light': '#FF8552',
        },
      },
    },
  },
})
