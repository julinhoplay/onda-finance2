import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config" // Mude de 'vite' para 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
    // Se o erro do setup.ts persistir, comente a linha abaixo temporariamente
    // setupFiles: './src/test/setup.ts', 
  },
})