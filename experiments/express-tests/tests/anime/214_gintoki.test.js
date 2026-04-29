const request = require('supertest');
const app = require('../../app');

// GINTOKI SAKATA - Lazy silver-haired samurai, sugar addict, accidental philosopher
describe('gintoki tests', () => {
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
    const res = await request(app).post('/echo').send({ anime: 'gintoki' });
    expect(res.status).toBe(200);
    expect(res.body.echo.anime).toBe('gintoki');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Gintoki');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Gintoki!');
  });
});
