const request = require('supertest');
const app = require('../../app');

// Charles Darwin - Evolution, natural selection, Galapagos, methodical observer
describe('charles darwin tests', () => {
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
    const res = await request(app).post('/echo').send({ scientists: 'charles_darwin' });
    expect(res.status).toBe(200);
    expect(res.body.echo.scientists).toBe('charles_darwin');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Charles');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Charles!');
  });
});
