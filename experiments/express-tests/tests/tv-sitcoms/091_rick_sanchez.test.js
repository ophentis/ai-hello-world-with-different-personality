const request = require('supertest');
const app = require('../../app');

// *burp* Look, it's simple Morty, we just take the fundamental string construct
describe('rick sanchez tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'rick_sanchez' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('rick_sanchez');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Rick');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Rick!');
  });
});
