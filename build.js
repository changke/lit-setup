const esbuild = require('esbuild');
const glob = require('glob');

esbuild.build({
  entryPoints: glob.sync('src/**/*.ts'),
  bundle: true,
  format: 'esm',
  splitting: true,
  outdir: 'dest'
});
