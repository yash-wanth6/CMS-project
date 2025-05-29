import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts: ["5173-yash-wanth6-cms-project-e0emc4ueyw.app.codeanywhere.com"]
  },
  plugins: [react(),tailwindcss()],
})
