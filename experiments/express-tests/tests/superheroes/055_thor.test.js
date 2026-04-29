const request = require('supertest');
const app = require('../../app');

// HARK! HEAR ME, MORTALS OF MIDGARD!
describe('thor tests', () => {
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
    const res = await request(app).post('/echo').send({ superheroes: 'thor' });
    expect(res.status).toBe(200);
    expect(res.body.echo.superheroes).toBe('thor');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Thor');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Thor!');
  });
});
