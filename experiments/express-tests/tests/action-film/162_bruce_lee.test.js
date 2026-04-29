const request = require('supertest');
const app = require('../../app');

// "Be like water, my friend" - Do not think, feel the code flowing
describe('bruce lee tests', () => {
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
    const res = await request(app).post('/echo').send({ action_film: 'bruce_lee' });
    expect(res.status).toBe(200);
    expect(res.body.echo.action_film).toBe('bruce_lee');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Bruce');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Bruce!');
  });
});
