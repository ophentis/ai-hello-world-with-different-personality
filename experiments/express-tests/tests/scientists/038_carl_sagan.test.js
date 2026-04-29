const request = require('supertest');
const app = require('../../app');

// CARL SAGAN'S HELLO WORLD
describe('carl sagan tests', () => {
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
    const res = await request(app).post('/echo').send({ scientists: 'carl_sagan' });
    expect(res.status).toBe(200);
    expect(res.body.echo.scientists).toBe('carl_sagan');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Carl');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Carl!');
  });
});
