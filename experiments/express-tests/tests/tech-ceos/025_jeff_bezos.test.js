const request = require('supertest');
const app = require('../../app');

// Day 1. Always Day 1. Everything is urgent and customer-obsessed.
describe('jeff bezos tests', () => {
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
    const res = await request(app).post('/echo').send({ tech_ceos: 'jeff_bezos' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tech_ceos).toBe('jeff_bezos');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Jeff');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Jeff!');
  });
});
