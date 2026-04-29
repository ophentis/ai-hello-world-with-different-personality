const request = require('supertest');
const app = require('../../app');

// Pythagoras - a² + b² = c², math cult leader, beans phobia
describe('pythagoras tests', () => {
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
    const res = await request(app).post('/echo').send({ scientists: 'pythagoras' });
    expect(res.status).toBe(200);
    expect(res.body.echo.scientists).toBe('pythagoras');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Pythagoras');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Pythagoras!');
  });
});
