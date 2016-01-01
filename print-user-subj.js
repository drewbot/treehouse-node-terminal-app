module.exports = function printUserSubj(username, badgecount, points, subject) {
  var message = `${ username } has ${ badgecount } total badge(s) and ${ points } points in ${ subject }.`;
  console.log(message);
}
