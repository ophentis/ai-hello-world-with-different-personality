const request = require('supertest');
const app = require('../../app');

// Muhammad Ali - The Greatest, Trash Talk King, Float Like a Butterfly
describe('muhammad ali tests', () => {
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
    const res = await request(app).post('/echo').send({ sports: 'muhammad_ali' });
    expect(res.status).toBe(200);
    expect(res.body.echo.sports).toBe('muhammad_ali');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Muhammad');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Muhammad!');
  });
});
