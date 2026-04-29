const request = require('supertest');
const app = require('../../app');

// Saruman the White, corrupted by ambition and industry
describe('saruman tests', () => {
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
    const res = await request(app).post('/echo').send({ lotr_tolkien: 'saruman' });
    expect(res.status).toBe(200);
    expect(res.body.echo.lotr_tolkien).toBe('saruman');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Saruman');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Saruman!');
  });
});
