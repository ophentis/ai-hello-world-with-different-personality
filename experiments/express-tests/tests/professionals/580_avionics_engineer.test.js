const request = require('supertest');
const app = require('../../app');

// Avionics Engineer: "Hello World" with DO-178C Flight Management and ARINC Bus
describe('avionics engineer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'avionics_engineer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('avionics_engineer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Avionics');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Avionics!');
  });
});
