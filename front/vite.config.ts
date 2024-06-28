import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

const isTest = process.env.NODE_ENV === 'test'

export default defineConfig({
  plugins: [
    react(),
    isTest && TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
