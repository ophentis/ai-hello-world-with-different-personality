const request = require('supertest');
const app = require('../../app');

// Lionel Messi - Magical Dribbler, Quiet Genius, GOAT Debate, Humble
describe('lionel messi tests', () => {
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
    const res = await request(app).post('/echo').send({ sports: 'lionel_messi' });
    expect(res.status).toBe(200);
    expect(res.body.echo.sports).toBe('lionel_messi');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Lionel');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Lionel!');
  });
});
