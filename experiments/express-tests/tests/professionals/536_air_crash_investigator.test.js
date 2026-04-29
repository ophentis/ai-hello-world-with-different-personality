const request = require('supertest');
const app = require('../../app');

// Aircraft data
describe('air crash investigator tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'air_crash_investigator' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('air_crash_investigator');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Air');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Air!');
  });
});
