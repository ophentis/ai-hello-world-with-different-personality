const request = require('supertest');
const app = require('../../app');

// The Doctor. NOT a Dalek. Very important distinction.
describe('doctor tests', () => {
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
    const res = await request(app).post('/echo').send({ doctor_who_bbc: 'doctor' });
    expect(res.status).toBe(200);
    expect(res.body.echo.doctor_who_bbc).toBe('doctor');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Doctor');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Doctor!');
  });
});
