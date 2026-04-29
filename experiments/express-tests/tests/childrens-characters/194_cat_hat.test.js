const request = require('supertest');
const app = require('../../app');

// Oh my! Oh me! What chaos shall we make today?
describe('cat hat tests', () => {
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
    const res = await request(app).post('/echo').send({ childrens_characters: 'cat_hat' });
    expect(res.status).toBe(200);
    expect(res.body.echo.childrens_characters).toBe('cat_hat');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Cat');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Cat!');
  });
});
