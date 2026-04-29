const request = require('supertest');
const app = require('../../app');

// SHAME! A queen's ambition
describe('cersei tests', () => {
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
    const res = await request(app).post('/echo').send({ game_of_thrones: 'cersei' });
    expect(res.status).toBe(200);
    expect(res.body.echo.game_of_thrones).toBe('cersei');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Cersei');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Cersei!');
  });
});
