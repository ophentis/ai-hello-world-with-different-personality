const request = require('supertest');
const app = require('../../app');

// MARCO POLO - Venetian Explorer
describe('marco polo tests', () => {
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
    const res = await request(app).post('/echo').send({ historical_figures: 'marco_polo' });
    expect(res.status).toBe(200);
    expect(res.body.echo.historical_figures).toBe('marco_polo');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Marco');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Marco!');
  });
});
