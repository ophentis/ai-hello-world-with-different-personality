const request = require('supertest');
const app = require('../../app');

// Yo, what's up? Jake the Dog here, keeping it real simple and chill.
describe('jake the dog tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'jake_the_dog' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('jake_the_dog');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Jake');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Jake!');
  });
});
