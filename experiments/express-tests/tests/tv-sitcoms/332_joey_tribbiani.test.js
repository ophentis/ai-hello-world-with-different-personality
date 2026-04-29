const request = require('supertest');
const app = require('../../app');

// How you doin'?
describe('joey tribbiani tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'joey_tribbiani' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('joey_tribbiani');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Joey');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Joey!');
  });
});
