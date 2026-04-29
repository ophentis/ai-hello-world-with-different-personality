const request = require('supertest');
const app = require('../../app');

// From the underworld, where souls are judged and eternities echo
describe('hades tests', () => {
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
    const res = await request(app).post('/echo').send({ mythology: 'hades' });
    expect(res.status).toBe(200);
    expect(res.body.echo.mythology).toBe('hades');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Hades');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Hades!');
  });
});
