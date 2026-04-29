const request = require('supertest');
const app = require('../../app');

// Captain Jean-Luc Picard, commanding USS Enterprise-D
describe('picard tests', () => {
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
    const res = await request(app).post('/echo').send({ star_trek: 'picard' });
    expect(res.status).toBe(200);
    expect(res.body.echo.star_trek).toBe('picard');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Picard');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Picard!');
  });
});
