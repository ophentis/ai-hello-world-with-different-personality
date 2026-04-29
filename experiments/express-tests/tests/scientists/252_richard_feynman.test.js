const request = require('supertest');
const app = require('../../app');

// Richard Feynman - Playful physicist, bongo drums, curiosity, "Surely you're joking"
describe('richard feynman tests', () => {
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
    const res = await request(app).post('/echo').send({ scientists: 'richard_feynman' });
    expect(res.status).toBe(200);
    expect(res.body.echo.scientists).toBe('richard_feynman');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Richard');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Richard!');
  });
});
