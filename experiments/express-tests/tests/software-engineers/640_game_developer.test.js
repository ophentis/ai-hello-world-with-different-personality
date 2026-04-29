const request = require('supertest');
const app = require('../../app');

// === GAME CONSTANTS ===
describe('game developer tests', () => {
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
    const res = await request(app).post('/echo').send({ software_engineers: 'game_developer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.software_engineers).toBe('game_developer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Game');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Game!');
  });
});
