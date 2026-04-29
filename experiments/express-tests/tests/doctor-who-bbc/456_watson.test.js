const request = require('supertest');
const app = require('../../app');

// Right then. Watson here. Military pragmatism and a good cup of tea.
describe('watson tests', () => {
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
    const res = await request(app).post('/echo').send({ doctor_who_bbc: 'watson' });
    expect(res.status).toBe(200);
    expect(res.body.echo.doctor_who_bbc).toBe('watson');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Watson');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Watson!');
  });
});
