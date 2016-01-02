module.exports = function printUser(profile) {
  var message = `${ profile.name } has ${ profile.badges.length } total badge(s) and ${ profile.points.total } total point(s).`;
  console.log(message);
}
