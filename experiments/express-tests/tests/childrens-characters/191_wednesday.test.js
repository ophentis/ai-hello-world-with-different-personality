const request = require('supertest');
const app = require('../../app');

// A program I wrote to test whether humanity can be salvaged.
describe('wednesday tests', () => {
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
    const res = await request(app).post('/echo').send({ childrens_characters: 'wednesday' });
    expect(res.status).toBe(200);
    expect(res.body.echo.childrens_characters).toBe('wednesday');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Wednesday');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Wednesday!');
  });
});
