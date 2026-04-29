const request = require('supertest');
const app = require('../../app');

// Power Grid Operations - Real-time Load Balancing
describe('power grid operator tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'power_grid_operator' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('power_grid_operator');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Power');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Power!');
  });
});
