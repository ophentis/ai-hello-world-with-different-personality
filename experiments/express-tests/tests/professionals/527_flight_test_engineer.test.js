const request = require('supertest');
const app = require('../../app');

// Flight Test Engineer: Hello World via test card execution and envelope expansion
describe('flight test engineer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'flight_test_engineer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('flight_test_engineer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Flight');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Flight!');
  });
});
