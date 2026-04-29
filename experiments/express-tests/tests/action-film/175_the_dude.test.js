const request = require('supertest');
const app = require('../../app');

// Yeah, well, you know, that's just like, uh,
describe('the dude tests', () => {
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
    const res = await request(app).post('/echo').send({ action_film: 'the_dude' });
    expect(res.status).toBe(200);
    expect(res.body.echo.action_film).toBe('the_dude');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/The');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, The!');
  });
});
