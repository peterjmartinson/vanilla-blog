const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(__dirname);
});

app.listen(3000, function() {
  console.log('Vanilla Blog listening on port 3000');
});
