const request = require('supertest');
const app = require('../../app');

// LISTEN. This is a DISASTER waiting to happen.
describe('gordon ramsay tests', () => {
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
    const res = await request(app).post('/echo').send({ celebrities: 'gordon_ramsay' });
    expect(res.status).toBe(200);
    expect(res.body.echo.celebrities).toBe('gordon_ramsay');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Gordon');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Gordon!');
  });
});
