const request = require('supertest');
const app = require('../../app');

// Odin speaks—Allfather, one-eyed seeker of wisdom at any cost
describe('odin tests', () => {
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
    const res = await request(app).post('/echo').send({ mythology: 'odin' });
    expect(res.status).toBe(200);
    expect(res.body.echo.mythology).toBe('odin');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Odin');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Odin!');
  });
});
