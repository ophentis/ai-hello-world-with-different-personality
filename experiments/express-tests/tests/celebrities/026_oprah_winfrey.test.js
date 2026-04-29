const request = require('supertest');
const app = require('../../app');

// You know what I love about this moment? CONNECTION.
describe('oprah winfrey tests', () => {
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
    const res = await request(app).post('/echo').send({ celebrities: 'oprah_winfrey' });
    expect(res.status).toBe(200);
    expect(res.body.echo.celebrities).toBe('oprah_winfrey');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Oprah');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Oprah!');
  });
});
