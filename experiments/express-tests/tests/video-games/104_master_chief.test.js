const request = require('supertest');
const app = require('../../app');

// Spartan-117 | Halo Protocol Initiated
describe('master chief tests', () => {
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
    const res = await request(app).post('/echo').send({ video_games: 'master_chief' });
    expect(res.status).toBe(200);
    expect(res.body.echo.video_games).toBe('master_chief');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Master');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Master!');
  });
});
