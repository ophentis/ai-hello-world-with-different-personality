const request = require('supertest');
const app = require('../../app');

// NIKOLA TESLA'S HELLO WORLD
describe('nikola tesla tests', () => {
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
    const res = await request(app).post('/echo').send({ scientists: 'nikola_tesla' });
    expect(res.status).toBe(200);
    expect(res.body.echo.scientists).toBe('nikola_tesla');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Nikola');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Nikola!');
  });
});
