const request = require('supertest');
const app = require('../../app');

// From a certain point of view, this is elegant.
describe('obiwan tests', () => {
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
    const res = await request(app).post('/echo').send({ star_wars: 'obiwan' });
    expect(res.status).toBe(200);
    expect(res.body.echo.star_wars).toBe('obiwan');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Obiwan');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Obiwan!');
  });
});
