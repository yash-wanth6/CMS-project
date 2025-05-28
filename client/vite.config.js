import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts: ["5173-yash-wanth6-cms-project-alavnf3rzr.app.codeanywhere.com"]
  },
  plugins: [react()],
})
