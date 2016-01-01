var https = require('https');
var printMessage = require('./print-message');
var printError = require('./print-error');

module.exports = function getProfile(username, subject) {
  var username = username;
  var subject = subject;
  console.log(username);
  console.log(subject);
  // request data at the given url (exists in json format)
  var req = https.get('https://teamtreehouse.com/' + username + '.json', function(res){
    // concatinate body chunks on response (they come in numerous packages)
    var body = ''
    res.on('data', function(chunk){
      body += chunk;
    })
    // when response is finished...
    res.on('end', function() {
      console.log(res.statusCode);
      if (res.statusCode === 200) {
        try {
          // parse (string to object) the data which arrrives as a string
          var profile = JSON.parse(body);
          // print the message
          printMessage(profile.name, profile.badges.length, profile.points[subject], subject);
          console.log(profile.points[subject] + ' ' + subject);
        } catch (e) { // print error
          printError(e);
        }
      } else {
        // using our print error function we created
        // passing in our own custom error object with the same message property as a standard error
        // print our message plus the value of a property on the http.STATUS_CODES object with the number of our response status code
        printError({message: `There was an error getting the profile for ${ username }. (${ http.STATUS_CODES[res.statusCode] }), Unlike the tutorial you have to replace http with https in order for this to actually work with your user name drewbotka2`})
      }
    })
  });
  // in the event of a request error console log the error message
  // connection error
  req.on('error', printError);
}
