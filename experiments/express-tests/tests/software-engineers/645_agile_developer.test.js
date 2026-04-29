const request = require('supertest');
const app = require('../../app');

// Retro item: Consider adding a config file for customizable greetings in Sprint-29
describe('agile developer tests', () => {
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
    const res = await request(app).post('/echo').send({ software_engineers: 'agile_developer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.software_engineers).toBe('agile_developer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Agile');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Agile!');
  });
});
