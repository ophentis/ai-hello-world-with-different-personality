const request = require('supertest');
const app = require('../../app');

// We are the music makers, and we are the dreamers of dreams...
describe('wonka tests', () => {
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
    const res = await request(app).post('/echo').send({ childrens_characters: 'wonka' });
    expect(res.status).toBe(200);
    expect(res.body.echo.childrens_characters).toBe('wonka');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Wonka');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Wonka!');
  });
});
