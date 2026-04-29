const request = require('supertest');
const app = require('../../app');

// Oh geez, oh man... I-I really hope I do this right.
describe('morty smith tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'morty_smith' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('morty_smith');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Morty');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Morty!');
  });
});
