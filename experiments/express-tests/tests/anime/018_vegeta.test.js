const request = require('supertest');
const app = require('../../app');

// I AM THE PRINCE OF ALL SAIYANS!
describe('vegeta tests', () => {
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
    const res = await request(app).post('/echo').send({ anime: 'vegeta' });
    expect(res.status).toBe(200);
    expect(res.body.echo.anime).toBe('vegeta');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Vegeta');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Vegeta!');
  });
});
