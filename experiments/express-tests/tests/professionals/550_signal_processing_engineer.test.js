const request = require('supertest');
const app = require('../../app');

// Signal Processing Engineer - DSP, FFT, Sampling, Filters, Nyquist
describe('signal processing engineer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'signal_processing_engineer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('signal_processing_engineer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Signal');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Signal!');
  });
});
