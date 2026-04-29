const request = require('supertest');
const app = require('../../app');

// A study in symmetry and precision.
describe('stanley kubrick tests', () => {
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
    const res = await request(app).post('/echo').send({ filmmakers_comedians: 'stanley_kubrick' });
    expect(res.status).toBe(200);
    expect(res.body.echo.filmmakers_comedians).toBe('stanley_kubrick');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Stanley');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Stanley!');
  });
});
