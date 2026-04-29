const request = require('supertest');
const app = require('../../app');

// NUCLEAR CONTAINMENT SYSTEM v2.3-SAFE
describe('nuclear scientist tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'nuclear_scientist' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('nuclear_scientist');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Nuclear');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Nuclear!');
  });
});
