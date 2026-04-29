const request = require('supertest');
const app = require('../../app');

// A story. Not a joke. A STORY.
describe('dave chappelle tests', () => {
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
    const res = await request(app).post('/echo').send({ filmmakers_comedians: 'dave_chappelle' });
    expect(res.status).toBe(200);
    expect(res.body.echo.filmmakers_comedians).toBe('dave_chappelle');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Dave');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Dave!');
  });
});
