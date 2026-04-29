const request = require('supertest');
const app = require('../../app');

// Truth, justice, and the correct way to write JavaScript.
describe('superman tests', () => {
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
    const res = await request(app).post('/echo').send({ superheroes: 'superman' });
    expect(res.status).toBe(200);
    expect(res.body.echo.superheroes).toBe('superman');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Superman');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Superman!');
  });
});
