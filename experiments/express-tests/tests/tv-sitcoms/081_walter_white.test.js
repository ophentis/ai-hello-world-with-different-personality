const request = require('supertest');
const app = require('../../app');

// You know, I've been thinking about this for a long time.
describe('walter white tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'walter_white' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('walter_white');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Walter');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Walter!');
  });
});
