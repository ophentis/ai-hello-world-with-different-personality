const request = require('supertest');
const app = require('../../app');

// A girl has no name. But she has a list.
describe('arya tests', () => {
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
    const res = await request(app).post('/echo').send({ game_of_thrones: 'arya' });
    expect(res.status).toBe(200);
    expect(res.body.echo.game_of_thrones).toBe('arya');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Arya');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Arya!');
  });
});
