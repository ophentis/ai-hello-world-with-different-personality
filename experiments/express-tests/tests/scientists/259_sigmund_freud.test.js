const request = require('supertest');
const app = require('../../app');

// Sigmund Freud - Everything is about your mother, id/ego/superego, cigars
describe('sigmund freud tests', () => {
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
    const res = await request(app).post('/echo').send({ scientists: 'sigmund_freud' });
    expect(res.status).toBe(200);
    expect(res.body.echo.scientists).toBe('sigmund_freud');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Sigmund');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Sigmund!');
  });
});
