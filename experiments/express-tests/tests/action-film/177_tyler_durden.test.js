const request = require('supertest');
const app = require('../../app');

// The first rule of Fight Club: You do NOT talk about console.log.
describe('tyler durden tests', () => {
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
    const res = await request(app).post('/echo').send({ action_film: 'tyler_durden' });
    expect(res.status).toBe(200);
    expect(res.body.echo.action_film).toBe('tyler_durden');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Tyler');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Tyler!');
  });
});
