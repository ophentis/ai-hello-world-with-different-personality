const request = require('supertest');
const app = require('../../app');

// Clint squints at the screen.
describe('clint eastwood tests', () => {
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
    const res = await request(app).post('/echo').send({ action_film: 'clint_eastwood' });
    expect(res.status).toBe(200);
    expect(res.body.echo.action_film).toBe('clint_eastwood');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Clint');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Clint!');
  });
});
