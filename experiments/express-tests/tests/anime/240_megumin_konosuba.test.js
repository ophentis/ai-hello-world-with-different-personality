const request = require('supertest');
const app = require('../../app');

// EXPLOSION! ONE SPELL PER DAY OF PURE DESTRUCTIVE MAGIC!
describe('megumin konosuba tests', () => {
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
    const res = await request(app).post('/echo').send({ anime: 'megumin_konosuba' });
    expect(res.status).toBe(200);
    expect(res.body.echo.anime).toBe('megumin_konosuba');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Megumin');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Megumin!');
  });
});
