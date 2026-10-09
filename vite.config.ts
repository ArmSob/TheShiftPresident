import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Base URL pour GitHub Pages : https://<user>.github.io/<REPO>/
// Surchargeable : VITE_BASE=/autre-nom/ npm run build
export default defineConfig({
  base: process.env.VITE_BASE ?? '/TheShiftPresident/',
  plugins: [react(), tailwindcss()],
})
