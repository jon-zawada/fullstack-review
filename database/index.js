const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoName: String, //repo name
  owner: String,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var newRepo = new Repo({
    repoName: repo.name,
    owner: repo.owner.login,
    forks_count: repo.forks_count
  })

  newRepo.save(function(err){
    if(err) {
      console.log(err);
    } else {
      console.log('saved a repo to db')
    }
  })
}

module.exports.save = save;