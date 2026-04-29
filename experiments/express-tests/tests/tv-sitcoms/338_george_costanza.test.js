const request = require('supertest');
const app = require('../../app');

// Was that wrong? Should I not have done that?
describe('george costanza tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'george_costanza' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('george_costanza');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/George');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, George!');
  });
});
