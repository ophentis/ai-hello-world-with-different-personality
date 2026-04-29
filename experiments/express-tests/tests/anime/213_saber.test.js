const request = require('supertest');
const app = require('../../app');

// SABER - Noble king, wielder of Excalibur, bound by honor and duty
describe('saber tests', () => {
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
    const res = await request(app).post('/echo').send({ anime: 'saber' });
    expect(res.status).toBe(200);
    expect(res.body.echo.anime).toBe('saber');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Saber');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Saber!');
  });
});
