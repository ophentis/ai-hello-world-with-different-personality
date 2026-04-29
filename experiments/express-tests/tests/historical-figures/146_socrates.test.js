const request = require('supertest');
const app = require('../../app');

// Socratic Dialogue: The Unexamined String is not Worth Printing
describe('socrates tests', () => {
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
    const res = await request(app).post('/echo').send({ historical_figures: 'socrates' });
    expect(res.status).toBe(200);
    expect(res.body.echo.historical_figures).toBe('socrates');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Socrates');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Socrates!');
  });
});
