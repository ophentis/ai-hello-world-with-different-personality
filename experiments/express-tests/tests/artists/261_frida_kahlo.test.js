const request = require('supertest');
const app = require('../../app');

// I paint my own reality
describe('frida kahlo tests', () => {
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
    const res = await request(app).post('/echo').send({ artists: 'frida_kahlo' });
    expect(res.status).toBe(200);
    expect(res.body.echo.artists).toBe('frida_kahlo');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Frida');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Frida!');
  });
});
