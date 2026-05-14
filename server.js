'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello FS2026 DevOps Course!----! Nun ist das der Render Teil ');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
