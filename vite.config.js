import { defineConfig } from 'vite'

export default defineConfig({
  base: '/lol-companion/',
  server: { port: 3000 },
  build: { outDir: 'dist' }
})
