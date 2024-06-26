import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:8]',
      localsConvention: 'camelCaseOnly',
    },
  },
})
