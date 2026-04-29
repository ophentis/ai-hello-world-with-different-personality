const request = require('supertest');
const app = require('../../app');

// Blockchain Developer: "Hello World" Implemented as Immutable Ledger
describe('blockchain developer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'blockchain_developer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('blockchain_developer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Blockchain');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Blockchain!');
  });
});
