const fs = require('fs');
const path = require('path');
const { walkPersonalities } = require('./lib/walk');

const personalitiesDir = path.resolve(__dirname, '..', 'personalities');
const testsDir = path.resolve(__dirname, '..', 'experiments', 'express-tests', 'tests');
const entries = walkPersonalities(personalitiesDir).filter(e => e.num !== '000');

function generateTest(entry) {
  const content = fs.readFileSync(entry.fullPath, 'utf8');
  const firstComment = content.match(/^\/\/.*$/m);
  const tagline = firstComment ? firstComment[0].replace(/^\/\/\s*/, '').trim() : entry.name;

  const greetName = entry.name.split(' ')[0].replace(/[^a-zA-Z]/g, '') || 'World';
  const capName = greetName.charAt(0).toUpperCase() + greetName.slice(1);

  const echoKey = entry.category.replace(/-/g, '_');
  const echoVal = entry.name.replace(/ /g, '_');

  return `const request = require('supertest');
const app = require('../../app');

// ${tagline}
describe('${entry.name} tests', () => {
  it('responds with hello world on root', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, World!');
  });

  it('reports healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(typeof res.body.uptime).toBe('number');
  });

  it('echoes posted data back', async () => {
    const res = await request(app).post('/echo').send({ ${echoKey}: '${echoVal}' });
    expect(res.status).toBe(200);
    expect(res.body.echo.${echoKey}).toBe('${echoVal}');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/${capName}');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, ${capName}!');
  });
});
`;
}

let created = 0;
for (const entry of entries) {
  const testFile = path.join(testsDir, entry.category, entry.file.replace('.js', '.test.js'));
  const dir = path.dirname(testFile);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const testContent = generateTest(entry);
  fs.writeFileSync(testFile, testContent);
  created++;
}

console.log(`Created ${created} test files`);
