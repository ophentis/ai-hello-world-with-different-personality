const request = require('supertest');
const app = require('../../app');

// Groot
describe('groot tests', () => {
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
    const res = await request(app).post('/echo').send({ superheroes: 'groot' });
    expect(res.status).toBe(200);
    expect(res.body.echo.superheroes).toBe('groot');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Groot');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Groot!');
  });
});
