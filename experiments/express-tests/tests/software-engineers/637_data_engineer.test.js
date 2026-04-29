const request = require('supertest');
const app = require('../../app');

// === SCHEMA DEFINITION ===
describe('data engineer tests', () => {
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
    const res = await request(app).post('/echo').send({ software_engineers: 'data_engineer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.software_engineers).toBe('data_engineer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Data');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Data!');
  });
});
