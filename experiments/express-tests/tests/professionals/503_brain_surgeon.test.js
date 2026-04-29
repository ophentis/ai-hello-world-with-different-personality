const request = require('supertest');
const app = require('../../app');

// NEUROSURICAL PROCEDURE LOG - CASE #003
describe('brain surgeon tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'brain_surgeon' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('brain_surgeon');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Brain');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Brain!');
  });
});
