const request = require('supertest');
const app = require('../../app');

// Courage the Cowardly Dog's Hello World
describe('courage tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'courage' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('courage');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Courage');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Courage!');
  });
});
