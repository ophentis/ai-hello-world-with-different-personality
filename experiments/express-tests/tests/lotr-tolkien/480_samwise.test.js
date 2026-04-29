const request = require('supertest');
const app = require('../../app');

// There's some good in this world, and it's worth coding for.
describe('samwise tests', () => {
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
    const res = await request(app).post('/echo').send({ lotr_tolkien: 'samwise' });
    expect(res.status).toBe(200);
    expect(res.body.echo.lotr_tolkien).toBe('samwise');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Samwise');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Samwise!');
  });
});
