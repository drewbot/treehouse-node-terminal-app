module.exports = function printUser(username, badgecount, points) {
  var message = `${ username } has ${ badgecount } total badge(s) and ${ points } total point(s).`;
  console.log(message);
}
