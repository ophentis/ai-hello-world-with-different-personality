const request = require('supertest');
const app = require('../../app');

// Dearly beloved, we are gathered here today to get through this thing called code
describe('prince tests', () => {
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
    const res = await request(app).post('/echo').send({ musicians: 'prince' });
    expect(res.status).toBe(200);
    expect(res.body.echo.musicians).toBe('prince');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Prince');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Prince!');
  });
});
