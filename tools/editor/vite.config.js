import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';

const app = new URL('../../admin/app/', import.meta.url);
const cms = new URL('./node_modules/@sveltia/cms/', import.meta.url);

export default defineConfig({
  base: '/admin/app/',
  plugins: [{
    name: 'preserve-editor-notices',
    closeBundle() {
      const dest = new URL('licenses/', app);
      const fonts = new URL('npm/assets/', cms);
      mkdirSync(dest, { recursive: true });
      copyFileSync(new URL('LICENSE.txt', cms), new URL('sveltia-cms.txt', dest));
      for (const name of readdirSync(fonts).filter(name => name.endsWith('.LICENSE.txt'))) {
        copyFileSync(new URL(name, fonts), new URL(name, dest));
      }
    }
  }],
  build: {
    target: 'es2022',
    outDir: fileURLToPath(app),
    emptyOutDir: true,
    license: { fileName: 'THIRD-PARTY-NOTICES.txt' },
    rolldownOptions: {
      input: fileURLToPath(new URL('./editor.js', import.meta.url)),
      output: { entryFileNames: 'editor.js' }
    }
  }
});
