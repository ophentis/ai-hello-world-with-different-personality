const request = require('supertest');
const app = require('../../app');

// Photonics System Design
describe('photonics engineer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'photonics_engineer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('photonics_engineer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Photonics');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Photonics!');
  });
});
