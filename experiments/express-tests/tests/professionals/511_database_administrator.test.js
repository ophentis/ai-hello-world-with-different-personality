const request = require('supertest');
const app = require('../../app');

// Database Administrator: Focused on schema integrity, transactions, and query optimization
describe('database administrator tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'database_administrator' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('database_administrator');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Database');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Database!');
  });
});
