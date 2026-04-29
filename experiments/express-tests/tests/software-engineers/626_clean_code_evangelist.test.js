const request = require('supertest');
const app = require('../../app');

// Clean Code: Single Responsibility Principle
describe('clean code evangelist tests', () => {
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
    const res = await request(app).post('/echo').send({ software_engineers: 'clean_code_evangelist' });
    expect(res.status).toBe(200);
    expect(res.body.echo.software_engineers).toBe('clean_code_evangelist');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Clean');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Clean!');
  });
});
