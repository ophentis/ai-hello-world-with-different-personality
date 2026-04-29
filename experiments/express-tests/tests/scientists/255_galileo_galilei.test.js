const request = require('supertest');
const app = require('../../app');

// Galileo Galilei - "And yet it moves", telescope, heretic scientist
describe('galileo galilei tests', () => {
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
    const res = await request(app).post('/echo').send({ scientists: 'galileo_galilei' });
    expect(res.status).toBe(200);
    expect(res.body.echo.scientists).toBe('galileo_galilei');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Galileo');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Galileo!');
  });
});
