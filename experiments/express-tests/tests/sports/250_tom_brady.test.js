const request = require('supertest');
const app = require('../../app');

// Tom Brady - GOAT QB, "Let's Go!", Avocado Ice Cream, 7 Rings, Optimal Living
describe('tom brady tests', () => {
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
    const res = await request(app).post('/echo').send({ sports: 'tom_brady' });
    expect(res.status).toBe(200);
    expect(res.body.echo.sports).toBe('tom_brady');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Tom');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Tom!');
  });
});
