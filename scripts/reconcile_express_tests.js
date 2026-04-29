const fs = require('fs');
const path = require('path');
const { walkPersonalities } = require('./lib/walk');

const personalitiesDir = path.resolve(__dirname, '..', 'personalities');
const testsDir = path.resolve(__dirname, '..', 'experiments', 'express-tests', 'tests');

const entries = walkPersonalities(personalitiesDir).filter(e => e.num !== '000');

// Build lookup: num -> { name, category, expectedFile }
const lookup = {};
for (const e of entries) {
  lookup[e.num] = {
    name: e.name,
    category: e.category,
    expectedFile: e.file.replace('.js', '.test.js'),
  };
}

// Find all test files
const allTestFiles = [];
const catDirs = fs.readdirSync(testsDir).filter(d => fs.statSync(path.join(testsDir, d)).isDirectory());
for (const cat of catDirs) {
  const dir = path.join(testsDir, cat);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.test.js'));
  for (const file of files) {
    const num = file.split('_')[0];
    allTestFiles.push({ file, category: cat, fullPath: path.join(dir, file), num });
  }
}

let moved = 0, renamed = 0, duplicates = 0, orphans = 0;

for (const tf of allTestFiles) {
  const expected = lookup[tf.num];
  if (!expected) {
    console.log(`ORPHAN: ${tf.category}/${tf.file} — no personality #${tf.num}`);
    orphans++;
    continue;
  }

  const expectedDir = path.join(testsDir, expected.category);
  const expectedPath = path.join(expectedDir, expected.expectedFile);

  // Already correct?
  if (tf.fullPath === expectedPath) continue;

  // Ensure target directory exists
  if (!fs.existsSync(expectedDir)) {
    fs.mkdirSync(expectedDir, { recursive: true });
  }

  // If target already exists, skip (keep the one in the right category)
  if (fs.existsSync(expectedPath)) {
    if (tf.fullPath !== expectedPath) {
      console.log(`DUPLICATE: ${tf.category}/${tf.file} — already exists at ${expected.category}/${expected.expectedFile}, removing`);
      fs.unlinkSync(tf.fullPath);
      duplicates++;
    }
    continue;
  }

  // Need to move and/or rename
  const content = fs.readFileSync(tf.fullPath, 'utf8');
  fs.writeFileSync(expectedPath, content);
  fs.unlinkSync(tf.fullPath);

  if (tf.category !== expected.category && tf.file !== expected.expectedFile) {
    console.log(`MOVE+RENAME: ${tf.category}/${tf.file} → ${expected.category}/${expected.expectedFile}`);
    moved++; renamed++;
  } else if (tf.category !== expected.category) {
    console.log(`MOVE: ${tf.category}/${tf.file} → ${expected.category}/${tf.file}`);
    moved++;
  } else {
    console.log(`RENAME: ${tf.category}/${tf.file} → ${expected.expectedFile}`);
    renamed++;
  }
}

// Check what's still missing
let missingCount = 0;
for (const [num, expected] of Object.entries(lookup)) {
  const expectedPath = path.join(testsDir, expected.category, expected.expectedFile);
  if (!fs.existsSync(expectedPath)) {
    missingCount++;
  }
}

console.log(`\nSummary: moved=${moved}, renamed=${renamed}, duplicates=${duplicates}, orphans=${orphans}`);
console.log(`Still missing: ${missingCount} test files`);
