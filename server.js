'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello FS2026 DevOps Course!----! Thulasi DAS IST LN04 teil hier! Heute ist es der LN09 von Thulasi Nadarajah--- :))) ');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
