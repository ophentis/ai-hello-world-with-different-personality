const request = require('supertest');
const app = require('../../app');

// Shake It Off (The Version Hidden In The Chorus)
describe('taylor swift tests', () => {
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
    const res = await request(app).post('/echo').send({ musicians: 'taylor_swift' });
    expect(res.status).toBe(200);
    expect(res.body.echo.musicians).toBe('taylor_swift');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Taylor');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Taylor!');
  });
});
