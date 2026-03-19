import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/lol-companion/',
  server: { port: 3000 },
  build: { outDir: 'dist' }
})
