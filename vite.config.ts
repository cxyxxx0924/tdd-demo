import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(configEnv => {

  const rootPath = resolve(process.cwd());
  const srcPath = `${resolve(process.cwd())}/src`;
  return {
    base: '.',
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    plugins: [vue(),
      Components({
        resolvers: [NaiveUiResolver()],
      })
    ],
  }
})
