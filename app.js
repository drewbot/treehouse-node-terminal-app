var https = require('https');
// var userInfo = require('./user_drewbotka2.json');

var username = 'drewbotka2';

function printMessage(username, badgecount, points) {
  var message = `${ username } has ${ badgecount } total badge(s) and ${ points } points in JS`;
  console.log(message);
}

// printMessage(userInfo.name, userInfo.badges.length, userInfo.points.JavaScript);

var req = https.get('https://teamtreehouse.com/' + username + '.json', function(res){
  var body = ''
  res.on('data', function(chunk){
    body += chunk;
  })
  res.on('end', function() {
    var profile = JSON.parse(body);
    printMessage(profile.name, profile.badges.length, profile.points.JavaScript);
  })
});

req.on('error', function(e) {
  console.error(e.message);
});
