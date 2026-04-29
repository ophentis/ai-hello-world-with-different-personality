const request = require('supertest');
const app = require('../../app');

// You never really understand a person until you consider things from their point of view.
describe('atticus tests', () => {
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
    const res = await request(app).post('/echo').send({ literary_characters: 'atticus' });
    expect(res.status).toBe(200);
    expect(res.body.echo.literary_characters).toBe('atticus');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Atticus');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Atticus!');
  });
});
