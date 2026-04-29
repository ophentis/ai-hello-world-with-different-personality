const request = require('supertest');
const app = require('../../app');

// Kobe Bryant - Mamba Mentality, Obsessive, Job's Not Finished
describe('kobe bryant tests', () => {
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
    const res = await request(app).post('/echo').send({ sports: 'kobe_bryant' });
    expect(res.status).toBe(200);
    expect(res.body.echo.sports).toBe('kobe_bryant');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Kobe');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Kobe!');
  });
});
