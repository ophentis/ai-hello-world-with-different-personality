const request = require('supertest');
const app = require('../../app');

// NEIL DEGRASSE TYSON'S HELLO WORLD
describe('neil degrasse tyson tests', () => {
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
    const res = await request(app).post('/echo').send({ scientists: 'neil_degrasse_tyson' });
    expect(res.status).toBe(200);
    expect(res.body.echo.scientists).toBe('neil_degrasse_tyson');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Neil');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Neil!');
  });
});
