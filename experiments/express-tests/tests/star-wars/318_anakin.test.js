const request = require('supertest');
const app = require('../../app');

// I don't like sand. It's coarse, rough, irritating...
describe('anakin tests', () => {
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
    const res = await request(app).post('/echo').send({ star_wars: 'anakin' });
    expect(res.status).toBe(200);
    expect(res.body.echo.star_wars).toBe('anakin');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Anakin');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Anakin!');
  });
});
