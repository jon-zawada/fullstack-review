const express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));

var parser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()

app.post('/repos', parser, function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  console.log(req.body.term)
  console.log('hi from index.js')
  res.send('res.send from server index.js')
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

