const request = require('supertest');
const app = require('../../app');

// Move fast and break things
describe('mark zuckerberg tests', () => {
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
    const res = await request(app).post('/echo').send({ tech_ceos: 'mark_zuckerberg' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tech_ceos).toBe('mark_zuckerberg');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Mark');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Mark!');
  });
});
