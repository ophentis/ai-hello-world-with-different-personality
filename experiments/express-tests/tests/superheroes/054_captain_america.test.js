const request = require('supertest');
const app = require('../../app');

// As a soldier and citizen, I believe in:
describe('captain america tests', () => {
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
    const res = await request(app).post('/echo').send({ superheroes: 'captain_america' });
    expect(res.status).toBe(200);
    expect(res.body.echo.superheroes).toBe('captain_america');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Captain');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Captain!');
  });
});
