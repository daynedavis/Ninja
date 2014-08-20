var express = require('express'),
  app = express();
  bodyParser = require('body-parser');

app.use(bodyParser());
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/src/index.html');
});

app.listen(3000, function() {
  console.log('I\'m Listening...');
});
