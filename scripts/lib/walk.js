const fs = require('fs');
const path = require('path');

function walkPersonalities(baseDir) {
  const entries = [];
  for (const sub of fs.readdirSync(baseDir)) {
    const subPath = path.join(baseDir, sub);
    if (fs.statSync(subPath).isDirectory()) {
      for (const f of fs.readdirSync(subPath)) {
        if (f.match(/^\d{3}_.*\.js$/)) {
          entries.push({ file: f, dir: subPath, category: sub });
        }
      }
    } else if (sub.match(/^\d{3}_.*\.js$/)) {
      entries.push({ file: sub, dir: baseDir, category: 'root' });
    }
  }
  entries.sort((a, b) => a.file.localeCompare(b.file));
  return entries.map(e => ({
    ...e,
    num: e.file.match(/^(\d{3})/)[1],
    name: e.file.replace(/^\d{3}_/, '').replace('.js', '').replace(/_/g, ' '),
    fullPath: path.join(e.dir, e.file),
  }));
}

module.exports = { walkPersonalities };
