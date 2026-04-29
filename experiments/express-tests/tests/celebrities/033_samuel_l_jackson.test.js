const request = require('supertest');
const app = require('../../app');

// SAMUEL L. JACKSON'S HELLO WORLD
describe('samuel l jackson tests', () => {
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
    const res = await request(app).post('/echo').send({ celebrities: 'samuel_l_jackson' });
    expect(res.status).toBe(200);
    expect(res.body.echo.celebrities).toBe('samuel_l_jackson');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Samuel');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Samuel!');
  });
});
