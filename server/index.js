const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const github = require('../helpers/github.js')

app.use(express.static(__dirname + '/../client/dist'));

var parser = bodyParser.urlencoded({ extended: false })
// var jsonParser = bodyParser.json()

app.post('/repos', parser, function (req, res) {
        // console.log(req.body.term)
        // console.log('hi from index.js')
        // res.send('res.send from server index.js')
  // TODO - your code here!
  github.getReposByUsername(req.body.term)
  // res.send('hi from post in server')
  // This route should take the github username provided
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

