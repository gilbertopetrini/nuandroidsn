import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Nubank',
        short_name: 'Nubank',
        start_url: '/',
        display: 'standalone',
        background_color: '#591E8C',
        theme_color: '#591E8C',
        icons: [
          {
            src: '"./src/public/logo.png"',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '"./src/public/logo.png"',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
}