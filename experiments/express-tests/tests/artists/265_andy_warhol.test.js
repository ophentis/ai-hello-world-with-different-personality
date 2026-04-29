const request = require('supertest');
const app = require('../../app');

// In the future, everyone will be world-famous for fifteen minutes
describe('andy warhol tests', () => {
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
    const res = await request(app).post('/echo').send({ artists: 'andy_warhol' });
    expect(res.status).toBe(200);
    expect(res.body.echo.artists).toBe('andy_warhol');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Andy');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Andy!');
  });
});
