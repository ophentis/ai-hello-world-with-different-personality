const request = require('supertest');
const app = require('../../app');

// LEXER/PARSER/EMITTER PIPELINE v5.0
describe('compiler engineer tests', () => {
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
    const res = await request(app).post('/echo').send({ professionals: 'compiler_engineer' });
    expect(res.status).toBe(200);
    expect(res.body.echo.professionals).toBe('compiler_engineer');
  });

  it('greets by name', async () => {
    const res = await request(app).get('/greet/Compiler');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, Compiler!');
  });
});
