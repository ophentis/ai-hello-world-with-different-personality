const request = require('supertest');
const app = require('../../app');

// Ehhhhh, what's up doc?
describe('bugs bunny tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'bugs_bunny' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('bugs_bunny');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Bugs');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Bugs!');
  });
});
