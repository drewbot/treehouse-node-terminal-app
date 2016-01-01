var https = require('https');
var printUser = require('./print-user');
var printError = require('./print-error');

////////////////////////////////////////////////////////////////////////////////
// TODO: make a getProfile module that just returns a profile object
////////////////////////////////////////////////////////////////////////////////

module.exports = function getProfile(username) {
  var username = username;
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
          printUser(profile.name, profile.badges.length, profile.points.total);
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
