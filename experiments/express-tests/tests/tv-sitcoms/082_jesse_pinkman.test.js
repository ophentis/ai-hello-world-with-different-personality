const request = require('supertest');
const app = require('../../app');

// Yo, check it out, science bitch!
describe('jesse pinkman tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'jesse_pinkman' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('jesse_pinkman');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Jesse');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Jesse!');
  });
});
