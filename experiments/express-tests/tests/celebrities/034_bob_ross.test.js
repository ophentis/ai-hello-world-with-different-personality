const request = require('supertest');
const app = require('../../app');

// BOB ROSS'S HELLO WORLD
describe('bob ross tests', () => {
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
    const res = await request(app).post('/echo').send({ celebrities: 'bob_ross' });
    expect(res.status).toBe(200);
    expect(res.body.echo.celebrities).toBe('bob_ross');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Bob');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Bob!');
  });
});
