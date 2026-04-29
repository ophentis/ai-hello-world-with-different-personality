const request = require('supertest');
const app = require('../../app');

// Tonight's the night. Tonight's the night.
describe('dexter morgan tests', () => {
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
    const res = await request(app).post('/echo').send({ tv_drama: 'dexter_morgan' });
    expect(res.status).toBe(200);
    expect(res.body.echo.tv_drama).toBe('dexter_morgan');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Dexter');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Dexter!');
  });
});
