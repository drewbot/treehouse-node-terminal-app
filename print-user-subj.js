module.exports = function printUserSubj(profile, options) {
  var subject = options;
  var message = `${ profile.name } has ${ profile.badges.length } total badge(s) and ${ profile.points[subject] } point(s) in ${ subject }.`;
  console.log(message);
}
