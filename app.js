var https = require('https');
// var userInfo = require('./user_drewbotka2.json');

var username = 'drewbotka2';

function printMessage(username, badgecount, points) {
  var message = `${ username } has ${ badgecount } total badge(s) and ${ points } points in JS`;
  console.log(message);
}

// printMessage(userInfo.name, userInfo.badges.length, userInfo.points.total);

var req = https.get('https://teamtreehouse.com/' + username + '.json', function(res){
  var body = ''
  res.on('data', function(chunk){
    body += chunk;
  })
  res.on('end', function() {
    console.log(body);
    console.log(typeof body);
  })
});

req.on('error', function(e) {
  console.error(e.message);
});
