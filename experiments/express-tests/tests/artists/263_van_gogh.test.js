const request = require('supertest');
const app = require('../../app');

// The starry night swirls above
describe('van gogh tests', () => {
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
    const res = await request(app).post('/echo').send({ artists: 'van_gogh' });
    expect(res.status).toBe(200);
    expect(res.body.echo.artists).toBe('van_gogh');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Van');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Van!');
  });
});
