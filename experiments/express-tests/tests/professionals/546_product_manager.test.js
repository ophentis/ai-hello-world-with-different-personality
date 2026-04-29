const request = require('supertest');
const app = require('../../app');

// Product Manager - Roadmap, OKRs, User Stories, Prioritization
describe('product manager tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'product_manager' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('product_manager');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Product');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Product!');
  });
});
