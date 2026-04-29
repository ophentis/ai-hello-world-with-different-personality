const request = require('supertest');
const app = require('../../app');

// There's a thousand no's before the one yes.
describe('steve jobs tests', () => {
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
    const res = await request(app).post('/echo').send({ tech_ceos: 'steve_jobs' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tech_ceos).toBe('steve_jobs');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Steve');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Steve!');
  });
});
