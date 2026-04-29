const request = require('supertest');
const app = require('../../app');

// I am Aragorn, son of Arathorn. A ranger must do what is right.
describe('aragorn tests', () => {
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
    const res = await request(app).post('/echo').send({ lotr_tolkien: 'aragorn' });
    expect(res.status).toBe(200);
    expect(res.body.echo.lotr_tolkien).toBe('aragorn');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Aragorn');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Aragorn!');
  });
});
