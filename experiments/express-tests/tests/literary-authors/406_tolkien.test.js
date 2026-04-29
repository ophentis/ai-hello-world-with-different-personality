const request = require('supertest');
const app = require('../../app');

// In the Beginning, there was Code
describe('tolkien tests', () => {
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
    const res = await request(app).post('/echo').send({ literary_authors: 'tolkien' });
    expect(res.status).toBe(200);
    expect(res.body.echo.literary_authors).toBe('tolkien');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Tolkien');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Tolkien!');
  });
});
