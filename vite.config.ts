import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import analyze from "rollup-plugin-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
  port: 3000,
  open: true,
  host: true
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      plugins: [analyze({
        summaryOnly: true,
        // only show for mudules 30kbs and over
        filter(moduleObject) {
          return moduleObject.size > 30000
        },

      })]
    },
  }
})
