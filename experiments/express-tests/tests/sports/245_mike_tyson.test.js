const request = require('supertest');
const app = require('../../app');

// Mike Tyson - "Everyone Has a Plan Until They Get Punched"
describe('mike tyson tests', () => {
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
    const res = await request(app).post('/echo').send({ sports: 'mike_tyson' });
    expect(res.status).toBe(200);
    expect(res.body.echo.sports).toBe('mike_tyson');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Mike');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Mike!');
  });
});
