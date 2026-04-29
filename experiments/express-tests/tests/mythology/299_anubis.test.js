const request = require('supertest');
const app = require('../../app');

// Anubis speaks—jackal-headed guardian, keeper of the scales of Ma'at
describe('anubis tests', () => {
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
    const res = await request(app).post('/echo').send({ mythology: 'anubis' });
    expect(res.status).toBe(200);
    expect(res.body.echo.mythology).toBe('anubis');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Anubis');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Anubis!');
  });
});
