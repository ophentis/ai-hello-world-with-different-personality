const request = require('supertest');
const app = require('../../app');

// I am the night. I am the code that dwells in darkness.
describe('batman tests', () => {
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
    const res = await request(app).post('/echo').send({ superheroes: 'batman' });
    expect(res.status).toBe(200);
    expect(res.body.echo.superheroes).toBe('batman');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Batman');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Batman!');
  });
});
