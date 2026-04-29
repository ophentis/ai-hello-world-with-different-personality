const request = require('supertest');
const app = require('../../app');

// STAIRS! STAIRS! STAIRS!
describe('claptrap tests', () => {
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
    const res = await request(app).post('/echo').send({ video_games: 'claptrap' });
    expect(res.status).toBe(200);
    expect(res.body.echo.video_games).toBe('claptrap');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Claptrap');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Claptrap!');
  });
});
