const request = require('supertest');
const app = require('../../app');

// May the odds be ever in your favor.
describe('katniss everdeen tests', () => {
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
    const res = await request(app).post('/echo').send({ action_film: 'katniss_everdeen' });
    expect(res.status).toBe(200);
    expect(res.body.echo.action_film).toBe('katniss_everdeen');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Katniss');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Katniss!');
  });
});
