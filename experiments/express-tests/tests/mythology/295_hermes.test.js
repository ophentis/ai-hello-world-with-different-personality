const request = require('supertest');
const app = require('../../app');

// Hermes moves like lightning, speaks in riddles, and tricks reality itself
describe('hermes tests', () => {
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
    const res = await request(app).post('/echo').send({ mythology: 'hermes' });
    expect(res.status).toBe(200);
    expect(res.body.echo.mythology).toBe('hermes');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Hermes');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Hermes!');
  });
});
