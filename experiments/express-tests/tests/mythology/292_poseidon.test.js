const request = require('supertest');
const app = require('../../app');

// The earth-shaker speaks from the depths of the vast ocean
describe('poseidon tests', () => {
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
    const res = await request(app).post('/echo').send({ mythology: 'poseidon' });
    expect(res.status).toBe(200);
    expect(res.body.echo.mythology).toBe('poseidon');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Poseidon');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Poseidon!');
  });
});
