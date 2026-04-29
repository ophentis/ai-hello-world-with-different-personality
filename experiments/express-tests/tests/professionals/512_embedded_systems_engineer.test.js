const request = require('supertest');
const app = require('../../app');

// Embedded Systems Engineer: Low-level memory, registers, interrupts, and hardware control
describe('embedded systems engineer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'embedded_systems_engineer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('embedded_systems_engineer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Embedded');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Embedded!');
  });
});
