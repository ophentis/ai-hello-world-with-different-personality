const request = require('supertest');
const app = require('../../app');

// Robotics Engineer: Hello World via sensor fusion and servo control
describe('robotics engineer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'robotics_engineer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('robotics_engineer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Robotics');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Robotics!');
  });
});
