const request = require('supertest');
const app = require('../../app');

// SNAKE? SNAAAAAAAKE!
describe('solid snake tests', () => {
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
    const res = await request(app).post('/echo').send({ video_games: 'solid_snake' });
    expect(res.status).toBe(200);
    expect(res.body.echo.video_games).toBe('solid_snake');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Solid');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Solid!');
  });
});
