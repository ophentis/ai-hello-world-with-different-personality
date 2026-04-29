const request = require('supertest');
const app = require('../../app');

// hjkl navigation principle: move left with 'h' through verbose names
describe('vim user tests', () => {
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
    const res = await request(app).post('/echo').send({ software_engineers: 'vim_user' });
    expect(res.status).toBe(200);
    expect(res.body.echo.software_engineers).toBe('vim_user');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Vim');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Vim!');
  });
});
