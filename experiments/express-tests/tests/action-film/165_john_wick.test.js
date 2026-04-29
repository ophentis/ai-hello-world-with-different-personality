const request = require('supertest');
const app = require('../../app');

// They killed my dog. I will execute every console.log in my path.
describe('john wick tests', () => {
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
    const res = await request(app).post('/echo').send({ action_film: 'john_wick' });
    expect(res.status).toBe(200);
    expect(res.body.echo.action_film).toBe('john_wick');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/John');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, John!');
  });
});
