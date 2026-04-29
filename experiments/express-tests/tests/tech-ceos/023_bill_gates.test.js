const request = require('supertest');
const app = require('../../app');

// A pragmatic engineering solution to the greeting problem.
describe('bill gates tests', () => {
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
    const res = await request(app).post('/echo').send({ tech_ceos: 'bill_gates' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tech_ceos).toBe('bill_gates');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Bill');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Bill!');
  });
});
