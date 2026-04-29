const request = require('supertest');
const app = require('../../app');

// In the beginning, there was a need. A simple need.
describe('morgan freeman tests', () => {
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
    const res = await request(app).post('/echo').send({ celebrities: 'morgan_freeman' });
    expect(res.status).toBe(200);
    expect(res.body.echo.celebrities).toBe('morgan_freeman');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Morgan');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Morgan!');
  });
});
