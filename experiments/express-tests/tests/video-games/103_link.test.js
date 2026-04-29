const request = require('supertest');
const app = require('../../app');

// *silent determination*
describe('link tests', () => {
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
    const res = await request(app).post('/echo').send({ video_games: 'link' });
    expect(res.status).toBe(200);
    expect(res.body.echo.video_games).toBe('link');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Link');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Link!');
  });
});
