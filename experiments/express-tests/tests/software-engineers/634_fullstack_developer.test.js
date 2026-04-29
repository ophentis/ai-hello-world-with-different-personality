const request = require('supertest');
const app = require('../../app');

// === MODEL ===
describe('fullstack developer tests', () => {
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
    const res = await request(app).post('/echo').send({ software_engineers: 'fullstack_developer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.software_engineers).toBe('fullstack_developer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Fullstack');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Fullstack!');
  });
});
