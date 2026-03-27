import {rm, cp, glob} from 'node:fs/promises';
import {build} from 'esbuild';

// delete dest
const clean = () => rm('dest', {recursive: true, force: true});

// copy assets
const copy = () => Promise.all([
  cp('assets', 'dest/assets', {recursive: true}),
  cp('index.html', 'dest/index.html')
]);

const bundle = async () => {
  const entries = await Array.fromAsync(glob('src/**/*.wc.ts'));
  return build({
    entryPoints: entries,
    bundle: true,
    format: 'esm',
    splitting: true,
    outdir: 'dest/wc',
    target: 'es2024'
  });
};

// some lite parallel
const copyAndBundle = () => Promise.all([copy(), bundle()]);

// go
clean()
  .then(copyAndBundle)
  .catch(err => {
    console.error('Build failed:', err);
    process.exit(1);
  });
