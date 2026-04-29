const request = require('supertest');
const app = require('../../app');

// Serena Williams - Dominant GOAT, Fierce Competitor, 23 Grand Slams
describe('serena williams tests', () => {
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
    const res = await request(app).post('/echo').send({ sports: 'serena_williams' });
    expect(res.status).toBe(200);
    expect(res.body.echo.sports).toBe('serena_williams');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Serena');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Serena!');
  });
});
