var getProfile = require('./profile');


var users = process.argv.slice(2);

var username = users[0];
var subject = users[1];

getProfile(username, subject);

// // print the array index of the element passed as a node argument and the element itself
// var users = process.argv.slice(2);
// function logArrayElements(element, index, array) {
//   console.log('a[' + index + '] = ' + element);
// }
// users.forEach(logArrayElements);

// // get profile by passing in arguments when calling node app.js
// // "node app.js drewbotka2 chalkers"
// var users = process.argv.slice(2);
// users.forEach(getProfile);
// console.log(`Users: ${ users }. users is a(n) ${ typeof users }`);

// // get profile by using this array
// var users = ['drewbotka2', 'chalkers']
// users.forEach(getProfile);


// // static json version to test printMessage functionality
// var userInfo = require('./user_drewbotka2.json')
// var printMessage = require('./print-message');
// printMessage(userInfo.name, userInfo.badges.length, userInfo.points.JavaScript);
