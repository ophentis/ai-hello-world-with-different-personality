const request = require('supertest');
const app = require('../../app');

// Yo, what's good, fo shizzle?
describe('snoop dogg tests', () => {
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
    const res = await request(app).post('/echo').send({ celebrities: 'snoop_dogg' });
    expect(res.status).toBe(200);
    expect(res.body.echo.celebrities).toBe('snoop_dogg');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Snoop');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Snoop!');
  });
});
