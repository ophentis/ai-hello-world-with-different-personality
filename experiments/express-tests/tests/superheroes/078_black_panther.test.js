const request = require('supertest');
const app = require('../../app');

// T'Challa - Black Panther - King of Wakanda
describe('black panther tests', () => {
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
    const res = await request(app).post('/echo').send({ superheroes: 'black_panther' });
    expect(res.status).toBe(200);
    expect(res.body.echo.superheroes).toBe('black_panther');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Black');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Black!');
  });
});
