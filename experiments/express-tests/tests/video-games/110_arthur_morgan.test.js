const request = require('supertest');
const app = require('../../app');

// Arthur Morgan's Journal Entry
describe('arthur morgan tests', () => {
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
    const res = await request(app).post('/echo').send({ video_games: 'arthur_morgan' });
    expect(res.status).toBe(200);
    expect(res.body.echo.video_games).toBe('arthur_morgan');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Arthur');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Arthur!');
  });
});
