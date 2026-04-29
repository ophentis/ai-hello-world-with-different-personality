const request = require('supertest');
const app = require('../../app');

// I'M GONNA BE KING OF THE PROGRAMMERS!!!
describe('luffy tests', () => {
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
    const res = await request(app).post('/echo').send({ anime: 'luffy' });
    expect(res.status).toBe(200);
    expect(res.body.echo.anime).toBe('luffy');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Luffy');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Luffy!');
  });
});
