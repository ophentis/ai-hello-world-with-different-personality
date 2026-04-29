const request = require('supertest');
const app = require('../../app');

// ELIZABETH I - The Virgin Queen
describe('elizabeth tests', () => {
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
    const res = await request(app).post('/echo').send({ historical_figures: 'elizabeth' });
    expect(res.status).toBe(200);
    expect(res.body.echo.historical_figures).toBe('elizabeth');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Elizabeth');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Elizabeth!');
  });
});
