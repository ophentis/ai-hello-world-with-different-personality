const request = require('supertest');
const app = require('../../app');

// the words hurt her nose
describe('eleven tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_drama: 'eleven' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_drama).toBe('eleven');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Eleven');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Eleven!');
  });
});
