const request = require('supertest');
const app = require('../../app');

// Stephen Hawking - Theoretical physicist, black holes, ALS, computerized voice
describe('stephen hawking tests', () => {
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
    const res = await request(app).post('/echo').send({ scientists: 'stephen_hawking' });
    expect(res.status).toBe(200);
    expect(res.body.echo.scientists).toBe('stephen_hawking');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Stephen');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Stephen!');
  });
});
