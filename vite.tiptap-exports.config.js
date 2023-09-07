import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: ['es2016'],
    lib: {
      entry: path.resolve(__dirname, 'src/tiptap-exports.js'),
      formats: ['es'],
      name: 'MyLib',
      fileName: (format) => `tiptap-exports.js`,
    },
    rollupOptions: {
      output: {
        dir: path.resolve(path.dirname(''), 'lib'),
      },
    },
  },
});
