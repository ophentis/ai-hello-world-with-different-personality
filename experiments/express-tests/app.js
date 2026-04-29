const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.json({ message: 'Hello, World!' }));
app.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));
app.post('/echo', (req, res) => res.json({ echo: req.body }));
app.get('/greet/:name', (req, res) => res.json({ message: `Hello, ${req.params.name}!` }));
module.exports = app;
