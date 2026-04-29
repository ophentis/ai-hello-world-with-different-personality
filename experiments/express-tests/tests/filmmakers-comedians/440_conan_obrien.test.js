const request = require('supertest');
const app = require('../../app');

// Self-deprecating. Absurdist. A tall ginger who COMMITS to the bit.
describe('conan obrien tests', () => {
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
    const res = await request(app).post('/echo').send({ filmmakers_comedians: 'conan_obrien' });
    expect(res.status).toBe(200);
    expect(res.body.echo.filmmakers_comedians).toBe('conan_obrien');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Conan');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Conan!');
  });
});
