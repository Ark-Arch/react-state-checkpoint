import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      "5173-arkarch-reactstatecheck-sutyc8jgnpq.ws-eu117.gitpod.io" // Add your Gitpod host
    ]
  }
})