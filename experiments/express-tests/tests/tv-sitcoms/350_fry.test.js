const request = require('supertest');
const app = require('../../app');

// Fry's Hello World
describe('fry tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'fry' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('fry');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Fry');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Fry!');
  });
});
