const request = require('supertest');
const app = require('../../app');

// DRACARYS! Mother of Dragons
describe('daenerys tests', () => {
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
    const res = await request(app).post('/echo').send({ game_of_thrones: 'daenerys' });
    expect(res.status).toBe(200);
    expect(res.body.echo.game_of_thrones).toBe('daenerys');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Daenerys');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Daenerys!');
  });
});
