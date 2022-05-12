import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import svgrPlugin from 'vite-plugin-svgr'
const svgrPlugin = require('vite-plugin-svgr')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgrPlugin({ svgrOptions: { icon: true } }), react()]
})
// svgrPlugin({ svgrOptions: { icon: true } }),
