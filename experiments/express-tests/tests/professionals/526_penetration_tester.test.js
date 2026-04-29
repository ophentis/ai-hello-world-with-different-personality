const request = require('supertest');
const app = require('../../app');

// Penetration Tester: Hello World via recon and exploitation phases
describe('penetration tester tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'penetration_tester' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('penetration_tester');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Penetration');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Penetration!');
  });
});
