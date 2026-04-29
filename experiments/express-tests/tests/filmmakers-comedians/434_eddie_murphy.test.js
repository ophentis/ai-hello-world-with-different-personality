const request = require('supertest');
const app = require('../../app');

// Yo, check it. Multiple characters. One voice. One vision.
describe('eddie murphy tests', () => {
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
    const res = await request(app).post('/echo').send({ filmmakers_comedians: 'eddie_murphy' });
    expect(res.status).toBe(200);
    expect(res.body.echo.filmmakers_comedians).toBe('eddie_murphy');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Eddie');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Eddie!');
  });
});
