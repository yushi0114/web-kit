import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'lib/main.ts',
      name: 'SjzxWebKit',
      formats: ['es'],
      // the proper extensions will be added
      fileName: 'sjzx-web-kit',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
    },
  },
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./lib', import.meta.url)),
    },
  },
  plugins: [
    dts({
      skipDiagnostics: true,
      tsConfigFilePath: './tsconfig.lib.json'
    }),
    vue(), 
  ],
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `
                @use "@/style/global.scss" as *; \n
            `,
        },
    },
},
})
