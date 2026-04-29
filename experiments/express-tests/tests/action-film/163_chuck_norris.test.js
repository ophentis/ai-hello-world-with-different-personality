const request = require('supertest');
const app = require('../../app');

// Chuck Norris doesn't write JavaScript. JavaScript writes itself to honor Chuck Norris.
describe('chuck norris tests', () => {
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
    const res = await request(app).post('/echo').send({ action_film: 'chuck_norris' });
    expect(res.status).toBe(200);
    expect(res.body.echo.action_film).toBe('chuck_norris');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Chuck');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Chuck!');
  });
});
