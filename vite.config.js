import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true,
    port: 5000,
    strictPort: true,
    cors: true,
    hmr: {
      clientPort: 443,
      port: 5000,
      host: '3545b617-c82d-4f01-8668-6285430bdf0c-00-2vayfclkz13hx.janeway.replit.dev',
      protocol: 'wss'
    },
    watch: {
      usePolling: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    allowedHosts: ['*.replit.dev', '*.repl.co', 'localhost', '*.janeway.replit.dev', '3545b617-c82d-4f01-8668-6285430bdf0c-00-2vayfclkz13hx.janeway.replit.dev']
  }
})
