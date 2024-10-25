import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),AutoImport({
        vueTemplate: true,
        dts: 'src/typings/auto-imports.d.ts',
        // targets to transform
        include: [
          /\.[jt]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue\??/, // .vue
        ],
        exclude: ['**/dist/**'],
        // ignore Uppercase
        ignore: [/^[A-Z]+$/, 'h'],
        // global imports to register
        imports: [
          // presets
          'vue',
          'vue-router',
        ],
      })],

})
