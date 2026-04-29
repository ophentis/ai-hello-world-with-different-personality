const request = require('supertest');
const app = require('../../app');

// "Yes, and..." — The improviser's creed
describe('amy poehler tests', () => {
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
    const res = await request(app).post('/echo').send({ filmmakers_comedians: 'amy_poehler' });
    expect(res.status).toBe(200);
    expect(res.body.echo.filmmakers_comedians).toBe('amy_poehler');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Amy');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Amy!');
  });
});
