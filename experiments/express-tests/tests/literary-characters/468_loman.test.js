const request = require('supertest');
const app = require('../../app');

// The American Dream, or something like it.
describe('loman tests', () => {
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
    const res = await request(app).post('/echo').send({ literary_characters: 'loman' });
    expect(res.status).toBe(200);
    expect(res.body.echo.literary_characters).toBe('loman');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Loman');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Loman!');
  });
});
