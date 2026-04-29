const request = require('supertest');
const app = require('../../app');

// Materials Science Analysis Suite
describe('materials scientist tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'materials_scientist' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('materials_scientist');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Materials');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Materials!');
  });
});
