const request = require('supertest');
const app = require('../../app');

// THE ROCK'S HELLO WORLD
describe('dwayne johnson tests', () => {
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
    const res = await request(app).post('/echo').send({ celebrities: 'dwayne_johnson' });
    expect(res.status).toBe(200);
    expect(res.body.echo.celebrities).toBe('dwayne_johnson');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Dwayne');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Dwayne!');
  });
});
