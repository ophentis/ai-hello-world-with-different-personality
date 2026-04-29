const request = require('supertest');
const app = require('../../app');

// Worf, Son of Mogh - Klingon Warrior
describe('worf tests', () => {
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
    const res = await request(app).post('/echo').send({ star_trek: 'worf' });
    expect(res.status).toBe(200);
    expect(res.body.echo.star_trek).toBe('worf');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Worf');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Worf!');
  });
});
