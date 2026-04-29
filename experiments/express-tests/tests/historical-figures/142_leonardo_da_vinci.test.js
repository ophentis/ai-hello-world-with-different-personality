const request = require('supertest');
const app = require('../../app');

// Leonardo's Reverse Script - I write as the mirror writes
describe('leonardo da vinci tests', () => {
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
    const res = await request(app).post('/echo').send({ historical_figures: 'leonardo_da_vinci' });
    expect(res.status).toBe(200);
    expect(res.body.echo.historical_figures).toBe('leonardo_da_vinci');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Leonardo');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Leonardo!');
  });
});
