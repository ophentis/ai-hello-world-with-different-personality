/**
 * Backend service: HTTP request/response handler
 * Demonstrates: module exports, error handling, structured JSON logging, status codes
 */

const logger = {
  info: (msg, meta = {}) => console.log(JSON.stringify({ level: 'INFO', timestamp: new Date().toISOString(), msg, ...meta })),
  error: (msg, err, meta = {}) => console.error(JSON.stringify({ level: 'ERROR', timestamp: new Date().toISOString(), msg, error: err?.message, ...meta }))
};

const helloWorldHandler = (req, res) => {
  try {
    logger.info('Incoming request', { method: req.method, path: req.path, clientIp: req.ip });

    if (req.method !== 'GET') {
      res.statusCode = 405;
      logger.error('Method not allowed', new Error('Invalid method'), { method: req.method });
      return res.json({ error: 'Method Not Allowed' });
    }

    const payload = {
      message: 'Hello World',
      status: 'success',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    };

    res.statusCode = 200;
    logger.info('Request successful', { statusCode: 200 });
    res.json(payload);
  } catch (err) {
    res.statusCode = 500;
    logger.error('Internal server error', err, { stack: err.stack });
    res.json({ error: 'Internal Server Error' });
  }
};

const mockResponse = {
  statusCode: 200,
  json: (data) => console.log(JSON.stringify(data, null, 2))
};

const mockRequest = {
  method: 'GET',
  path: '/api/hello',
  ip: '127.0.0.1'
};

module.exports = { helloWorldHandler, logger };

// Execute
helloWorldHandler(mockRequest, mockResponse);
