import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    headers: {
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Content-Security-Policy': "default-src 'self' " +
        "https://intellisync-server-fbc47e09b67b.herokuapp.com " +
        "https://fonts.googleapis.com " +
        "https://fonts.gstatic.com " +
        "https://intellisyncsolutions.io " +
        "https://www.googletagmanager.com " +
        "https://www.google-analytics.com " +
        "https://intellisync-solutions-io.netlify.app " +
        "wss://intellisync-server-fbc47e09b67b.herokuapp.com " +
        "ws://intellisync-server-fbc47e09b67b.herokuapp.com; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://intellisync-server-fbc47e09b67b.herokuapp.com; " +
        "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://intellisync-server-fbc47e09b67b.herokuapp.com; " +
        "frame-src 'self' " +
        "https://intellisyncsolutions.io " +
        "https://intellisync-server-fbc47e09b67b.herokuapp.com " +
        "https://intellisync-solutions-io.netlify.app " +
        "https://www.googletagmanager.com " +
        "https://www.google-analytics.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "img-src 'self' data: https: https://www.googletagmanager.com https://www.google-analytics.com; " +
        "font-src 'self' data: https://fonts.gstatic.com; " +
        "connect-src 'self' https: wss: ws: " +
        "wss://intellisync-server-fbc47e09b67b.herokuapp.com " +
        "ws://intellisync-server-fbc47e09b67b.herokuapp.com " +
        "https://intellisync-server-fbc47e09b67b.herokuapp.com " +
        "https://fonts.googleapis.com " +
        "https://fonts.gstatic.com " +
        "https://intellisyncsolutions.io " +
        "https://intellisync-solutions-io.netlify.app " +
        "https://www.google-analytics.com " +
        "https://www.googletagmanager.com"
    },
  },
})
