const request = require('supertest');
const app = require('../../app');

// HK-47 - Assassination Protocol Droid
describe('hk47 tests', () => {
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
    const res = await request(app).post('/echo').send({ star_wars: 'hk47' });
    expect(res.status).toBe(200);
    expect(res.body.echo.star_wars).toBe('hk47');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Hk');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Hk!');
  });
});
