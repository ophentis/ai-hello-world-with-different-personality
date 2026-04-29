const request = require('supertest');
const app = require('../../app');

// One Hundred Years of JavaScript
describe('marquez tests', () => {
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
    const res = await request(app).post('/echo').send({ literary_authors: 'marquez' });
    expect(res.status).toBe(200);
    expect(res.body.echo.literary_authors).toBe('marquez');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Marquez');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Marquez!');
  });
});
