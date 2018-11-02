const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.json({ name: 'Autodeploy Test', status: 'ok' });
});

module.exports = app;
