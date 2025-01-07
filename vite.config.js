import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ra-16-hooks-usejson-fetch/',
  plugins: [react()],
})
