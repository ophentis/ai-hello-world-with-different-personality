const request = require('supertest');
const app = require('../../app');

// Configurable greeting system with extensible output handlers
describe('staff engineer tests', () => {
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
    const res = await request(app).post('/echo').send({ software_engineers: 'staff_engineer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.software_engineers).toBe('staff_engineer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Staff');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Staff!');
  });
});
