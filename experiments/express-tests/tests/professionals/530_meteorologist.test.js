const request = require('supertest');
const app = require('../../app');

// Meteorologist: Hello World via pressure systems and forecast models
describe('meteorologist tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'meteorologist' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('meteorologist');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Meteorologist');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Meteorologist!');
  });
});
