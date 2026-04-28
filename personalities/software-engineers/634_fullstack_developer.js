/**
 * Fullstack MVC architecture for Hello World
 * Demonstrates: routes + controller + view separation, middleware thinking
 */

// === MODEL ===
const HelloWorldModel = {
  data: { message: 'Hello World', timestamp: new Date() },
  fetch: function() { return this.data; },
  update: function(msg) { this.data.message = msg; }
};

// === VIEW ===
const HelloWorldView = {
  render: (data) => {
    return `
<!DOCTYPE html>
<html>
<head>
  <title>Hello World</title>
</head>
<body>
  <h1>${data.message}</h1>
  <p>Rendered at: ${data.timestamp}</p>
</body>
</html>
    `;
  },

  renderJson: (data) => ({
    success: true,
    data: data,
    version: '1.0'
  })
};

// === CONTROLLER ===
const HelloWorldController = {
  indexPage: (req, res) => {
    const model = HelloWorldModel.fetch();
    const html = HelloWorldView.render(model);
    res.render(html);
  },

  apiEndpoint: (req, res) => {
    const model = HelloWorldModel.fetch();
    const response = HelloWorldView.renderJson(model);
    res.json(response);
  }
};

// === ROUTER ===
const Router = {
  routes: {
    'GET /': (req, res) => HelloWorldController.indexPage(req, res),
    'GET /api/hello': (req, res) => HelloWorldController.apiEndpoint(req, res)
  },

  dispatch: (method, path) => {
    const key = `${method} ${path}`;
    return Router.routes[key];
  }
};

// === MOCK RESPONSE ===
const mockRes = {
  render: (html) => console.log(html),
  json: (data) => console.log(JSON.stringify(data, null, 2))
};

// === EXECUTE ===
const handler = Router.dispatch('GET', '/api/hello');
handler({}, mockRes);
