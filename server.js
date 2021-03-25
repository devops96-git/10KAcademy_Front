const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/front'));

app.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/dist/front/index.html'));
});

app.listen(8080, ()=> {
  console.log('Server running on port: 8080');
});
