const request = require('supertest');
const app = require('../../app');

// TODO: Let's discuss whether we should extract this to a shared greeting module
describe('tech lead tests', () => {
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
    const res = await request(app).post('/echo').send({ software_engineers: 'tech_lead' });
    expect(res.status).toBe(200);
    expect(res.body.echo.software_engineers).toBe('tech_lead');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Tech');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Tech!');
  });
});
