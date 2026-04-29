const request = require('supertest');
const app = require('../../app');

// DEPRECATED: The old greeting pattern (see 644_tech_debt_warrior.js.old for legacy)
describe('tech debt warrior tests', () => {
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
    const res = await request(app).post('/echo').send({ software_engineers: 'tech_debt_warrior' });
    expect(res.status).toBe(200);
    expect(res.body.echo.software_engineers).toBe('tech_debt_warrior');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Tech');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Tech!');
  });
});
