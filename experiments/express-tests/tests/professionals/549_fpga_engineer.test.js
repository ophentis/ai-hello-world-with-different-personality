const request = require('supertest');
const app = require('../../app');

// FPGA Engineer - Hardware Description, Clock Domains, Synthesis Constraints
describe('fpga engineer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'fpga_engineer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('fpga_engineer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Fpga');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Fpga!');
  });
});
