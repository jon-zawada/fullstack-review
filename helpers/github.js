const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // https://api.github.com/users/:username/repos

  console.log('USERNAME FROM github.js: ' + username)

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  // function callback(error, response, body) {
  //   if(error) {
  //     console.log(error);
  //   }
  //   if(!error && response.statusCode == 200) {
  //     const info = JSON.parse(body);
  //     console.log(info[0]);
  //     // console.log(info[0].owner.login);
  //     // console.log(info[0].forks_count);
  //   }
  // }

  // request(options, callback);
  request.get(options, (err, response, data)=>{
    if(err){
      console.log('uh oh from github.js',err)
    } else {
      callback(null, data)
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;