const request = require('supertest');
const app = require('../../app');

// Time is the ultimate puzzle.
describe('christopher nolan tests', () => {
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
    const res = await request(app).post('/echo').send({ filmmakers_comedians: 'christopher_nolan' });
    expect(res.status).toBe(200);
    expect(res.body.echo.filmmakers_comedians).toBe('christopher_nolan');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Christopher');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Christopher!');
  });
});
