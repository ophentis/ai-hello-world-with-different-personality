const request = require('supertest');
const app = require('../../app');

// First principles: what do we fundamentally need to accomplish?
describe('elon musk tests', () => {
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
    const res = await request(app).post('/echo').send({ tech_ceos: 'elon_musk' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tech_ceos).toBe('elon_musk');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Elon');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Elon!');
  });
});
