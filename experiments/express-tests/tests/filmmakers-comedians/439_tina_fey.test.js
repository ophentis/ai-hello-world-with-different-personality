const request = require('supertest');
const app = require('../../app');

// Nerdy. Precise. A writer-performer who GETS it.
describe('tina fey tests', () => {
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
    const res = await request(app).post('/echo').send({ filmmakers_comedians: 'tina_fey' });
    expect(res.status).toBe(200);
    expect(res.body.echo.filmmakers_comedians).toBe('tina_fey');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Tina');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Tina!');
  });
});
