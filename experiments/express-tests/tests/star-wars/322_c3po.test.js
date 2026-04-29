const request = require('supertest');
const app = require('../../app');

// Oh my! A protocol droid's anxious greeting
describe('c3po tests', () => {
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
    const res = await request(app).post('/echo').send({ star_wars: 'c3po' });
    expect(res.status).toBe(200);
    expect(res.body.echo.star_wars).toBe('c3po');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Cpo');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Cpo!');
  });
});
