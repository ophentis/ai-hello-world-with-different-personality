const request = require('supertest');
const app = require('../../app');

// *BEEP BOOP BEEP* — A brave little astromech's solution
describe('r2d2 tests', () => {
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
    const res = await request(app).post('/echo').send({ star_wars: 'r2d2' });
    expect(res.status).toBe(200);
    expect(res.body.echo.star_wars).toBe('r2d2');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Rd');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Rd!');
  });
});
