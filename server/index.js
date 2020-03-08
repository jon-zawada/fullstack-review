const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const github = require('../helpers/github.js')
const db = require('../database/index.js')

app.use(express.static(__dirname + '/../client/dist'));

var parser = bodyParser.urlencoded({ extended: false })
// var jsonParser = bodyParser.json()

app.post('/repos', parser, function (req, res) {
        // console.log(req.body.term)
        // console.log('hi from index.js')
        // res.send('res.send from server index.js')
  // TODO - your code here!
  github.getReposByUsername(req.body.term, (err, data)=>{
    if(!err){
      console.log('we made it here in get repos')
      var gitRepos = JSON.parse(data);
      // console.log(gitRepos)
      // res.send('These were sent to db(unless not unique):', gitRepos)

      for(let i = 0; i < gitRepos.length; i++){
        db.save(gitRepos[i]);
      }
    }
  })
  // res.send('hi from post in server')
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.status(200).send('done')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // res.send('Connection is alive for Get')
  // Repo.
  // res.send(Repo.find().limit(5))
  db.Repo.find((err, data)=>{
    if(err){
      console.log(err)
    }else {
      console.log(data)
      res.send(data)
    }
  }).limit(25).sort({forks_count: -1})
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

