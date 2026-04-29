const request = require('supertest');
const app = require('../../app');

// Cortana - Ready to assist
describe('cortana tests', () => {
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
    const res = await request(app).post('/echo').send({ video_games: 'cortana' });
    expect(res.status).toBe(200);
    expect(res.body.echo.video_games).toBe('cortana');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Cortana');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Cortana!');
  });
});
