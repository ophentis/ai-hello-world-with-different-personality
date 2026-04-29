const request = require('supertest');
const app = require('../../app');

// LeBron James - The King, Versatile, Business Mogul, Chosen One
describe('lebron james tests', () => {
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
    const res = await request(app).post('/echo').send({ sports: 'lebron_james' });
    expect(res.status).toBe(200);
    expect(res.body.echo.sports).toBe('lebron_james');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Lebron');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Lebron!');
  });
});
