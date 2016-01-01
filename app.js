var getProfile = require('./profile');

// get profile by passing in arguments when calling node app.js
// "node app.js drewbotka2 chalkers"
var users = process.argv.slice(2);
users.forEach(getProfile);

// // get profile by using this array
// var users = ['drewbotka2', 'chalkers']
// users.forEach(getProfile);


// // static json version to test printMessage functionality
// var userInfo = require('./user_drewbotka2.json')
// var printMessage = require('./print-message');
// printMessage(userInfo.name, userInfo.badges.length, userInfo.points.JavaScript);
