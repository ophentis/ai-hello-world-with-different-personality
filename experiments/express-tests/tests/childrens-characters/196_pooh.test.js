const request = require('supertest');
const app = require('../../app');

// Oh bother. A little program for a bear of very little brain.
describe('pooh tests', () => {
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
    const res = await request(app).post('/echo').send({ childrens_characters: 'pooh' });
    expect(res.status).toBe(200);
    expect(res.body.echo.childrens_characters).toBe('pooh');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Pooh');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Pooh!');
  });
});
