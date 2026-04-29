const request = require('supertest');
const app = require('../../app');

// SHINZOU WO SASAGEYO! I WILL BREAK FREE FROM THESE CHAINS OF IGNORANCE!
describe('eren tests', () => {
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
    const res = await request(app).post('/echo').send({ anime: 'eren' });
    expect(res.status).toBe(200);
    expect(res.body.echo.anime).toBe('eren');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Eren');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Eren!');
  });
});
