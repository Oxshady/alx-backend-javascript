const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello ALX!');
});

app.listen(1245);

module.exports = app;
