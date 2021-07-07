import path from 'path';

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'joli-vue'
    },
  }
}
