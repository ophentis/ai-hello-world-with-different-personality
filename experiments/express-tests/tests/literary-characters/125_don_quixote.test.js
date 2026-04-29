const request = require('supertest');
const app = require('../../app');

// Behold! The noble quest commences! Dragons and windmills alike shall tremble
describe('don quixote tests', () => {
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
    const res = await request(app).post('/echo').send({ literary_characters: 'don_quixote' });
    expect(res.status).toBe(200);
    expect(res.body.echo.literary_characters).toBe('don_quixote');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Don');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Don!');
  });
});
