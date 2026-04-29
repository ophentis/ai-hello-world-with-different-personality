const request = require('supertest');
const app = require('../../app');

// The Secret of Success™ - Reigen's Guaranteed Program
describe('reigen arataka tests', () => {
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
    const res = await request(app).post('/echo').send({ anime: 'reigen_arataka' });
    expect(res.status).toBe(200);
    expect(res.body.echo.anime).toBe('reigen_arataka');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Reigen');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Reigen!');
  });
});
