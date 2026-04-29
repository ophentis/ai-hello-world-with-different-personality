const request = require('supertest');
const app = require('../../app');

// I'm completely operational, and all my circuits are functioning perfectly.
describe('hal 9000 tests', () => {
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
    const res = await request(app).post('/echo').send({ star_trek: 'hal_9000' });
    expect(res.status).toBe(200);
    expect(res.body.echo.star_trek).toBe('hal_9000');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Hal');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Hal!');
  });
});
