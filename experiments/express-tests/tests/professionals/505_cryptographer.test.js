const request = require('supertest');
const app = require('../../app');

// CRYPTOGRAPHIC SECURE TRANSPORT v4.1.2-SEALED
describe('cryptographer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'cryptographer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('cryptographer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Cryptographer');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Cryptographer!');
  });
});
