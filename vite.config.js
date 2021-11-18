import { defineConfig } from 'vite';
const path = require('path');
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:[
      {find: '@', replacement:path.resolve(__dirname, '.')},
      {find: '@pages', replacement:path.resolve(__dirname, './src/pages')},
      {find: '@styles', replacement:path.resolve(__dirname, './src/styles')},
      {find: '@components', replacement:path.resolve(__dirname, './src/components')},
      {find: '@utils', replacement:path.resolve(__dirname, './src/utils')},
      {find: '@interfaces', replacement:path.resolve(__dirname, './src/utils/interfaces')},
      {find: '@types', replacement:path.resolve(__dirname, './src/utils/types')},
      {find: '@functions', replacement:path.resolve(__dirname, './src/utils/functions')},
      {find: '@public', replacement:path.resolve(__dirname, './src/public')},
    ]
  },

  
  plugins: [
    react(),
  ]
})
