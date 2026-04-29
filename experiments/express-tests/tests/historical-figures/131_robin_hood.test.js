const request = require('supertest');
const app = require('../../app');

// Steal code from the privileged Few and redistribute to the Many
describe('robin hood tests', () => {
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
    const res = await request(app).post('/echo').send({ historical_figures: 'robin_hood' });
    expect(res.status).toBe(200);
    expect(res.body.echo.historical_figures).toBe('robin_hood');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Robin');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Robin!');
  });
});
