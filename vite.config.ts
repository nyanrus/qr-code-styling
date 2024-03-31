import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

const r = (path) => {
  return resolve(__dirname,path)
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
    reportCompressedSize: false,
    lib: {
      entry: r("src/index.ts"),
      name: "QRCodeStyling",
      fileName: "qr-code-styling",
      formats: ["es"]
    },
  },
  plugins: [dts({ rollupTypes: true })]
})
