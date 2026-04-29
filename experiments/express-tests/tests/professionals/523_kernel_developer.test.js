const request = require('supertest');
const app = require('../../app');

// Kernel Developer: Hello World via memory management and process control
describe('kernel developer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'kernel_developer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('kernel_developer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Kernel');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Kernel!');
  });
});
