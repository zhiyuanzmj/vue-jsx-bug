import { defineConfig, } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import inspect from 'vite-plugin-inspect'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vueJsx({ optimize: true }),inspect()],
})
