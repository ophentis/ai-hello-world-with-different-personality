const request = require('supertest');
const app = require('../../app');

// LITHTEN HERE, BUTHTER! I'm gonna thow you how to do thith RIGHT!
describe('daffy duck tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_sitcoms: 'daffy_duck' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_sitcoms).toBe('daffy_duck');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Daffy');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Daffy!');
  });
});
