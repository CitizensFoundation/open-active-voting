const { resolve, join, extname, basename, dirname } = require('path');
const { readdir } = require('fs').promises;
const { renameSync } = require('fs');

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

;(async () => {
  for await (const f of getFiles('/home/robert/Documents/hm2021kjorgogn')) {
    const folder = dirname(f);
    const extension = extname(f);
    if (extension=='.jpg' ||
        extension=='.JPG' ||
        extension=='.pdf' ||
        extension=='.PDF') {
      const name = basename(f, extension);
      const nameWithExtension = `${name}${extension}`;
      const idname = nameWithExtension.split("-")[1];
      const renameFrom = `${folder}/${nameWithExtension}`;
      const renameTo = `${folder}/${idname.toLocaleLowerCase()}`;
      console.log(`${renameFrom} -> ${renameTo}`);
      try {
        renameSync(renameFrom, renameTo);
      } catch (e) {
        console.error(e);
      }
    }
  }
})()