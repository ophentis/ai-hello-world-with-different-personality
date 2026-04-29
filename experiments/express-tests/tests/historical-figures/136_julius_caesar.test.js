const request = require('supertest');
const app = require('../../app');

// Veni, Vidi, Vici - I came, I saw, I conquered
describe('julius caesar tests', () => {
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
    const res = await request(app).post('/echo').send({ historical_figures: 'julius_caesar' });
    expect(res.status).toBe(200);
    expect(res.body.echo.historical_figures).toBe('julius_caesar');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Julius');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Julius!');
  });
});
