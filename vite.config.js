// import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(
  {
    plugins: [
      vue({
        customElement: true,
        template: {
          compilerOptions: {
            isCustomElement: tagName => {
              return tagName === 'vue-advanced-chat' || tagName === 'emoji-picker'
            }
          }
        }
      }),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/lib/index.js'),
        name: 'vue-advanced-chat'
      },
      rollupOptions: {
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    },
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  })
