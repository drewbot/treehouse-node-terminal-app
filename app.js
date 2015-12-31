var https = require('https');
// var userInfo = require('./user_drewbotka2.json');

var username = 'drewbotka2';

function printMessage(username, badgecount, points) {
  var message = `${ username } has ${ badgecount } total badge(s) and ${ points } points in JS`;
  console.log(message);
}

function printError(e){
  console.error(e.message);
}

// printMessage(userInfo.name, userInfo.badges.length, userInfo.points.JavaScript);

// request data at the given url (exists in json format)
var req = https.get('https://teamtreehouse.com/' + username + '.json', function(res){
  // concatinate body chunks on response (they come in numerous packages)
  var body = ''
  res.on('data', function(chunk){
    body += chunk;
  })
  // when response is finished, parse (string to object) the data which arrrives as a string
  res.on('end', function() {
    if (res.statusCode === 200) {
      try {
        var profile = JSON.parse(body);
        // print the message
        printMessage(profile.name, profile.badges.length, profile.points.JavaScript);
      } catch (e) { // Parse error
        printError(e);
      }
    } else {
      // using our print error function we created
      // passing in our own custom error object with the same message property as a standard error
      // print our message plus the value of a property on the http.STATUS_CODES object with the number of our response status code
      printError({message: `There was an error getting the profile for ${ username }. (${ http.STATUS_CODES[res.statusCode] }), Unlike the tutorial you have to replace http with https in order for this to actually work`})
    }
  })
});

// in the event of a request error console log the error message
// connection error
req.on('error', printError);
