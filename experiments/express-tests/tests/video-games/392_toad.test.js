const request = require('supertest');
const app = require('../../app');

// The loyal messenger
describe('toad tests', () => {
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
    const res = await request(app).post('/echo').send({ video_games: 'toad' });
    expect(res.status).toBe(200);
    expect(res.body.echo.video_games).toBe('toad');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Toad');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Toad!');
  });
});
