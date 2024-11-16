import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    Pages({
      dirs: 'src/routes',
    }),
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
