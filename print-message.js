module.exports = function printMessage(username, badgecount, points) {
  var message = `${ username } has ${ badgecount } total badge(s) and ${ points } points in JS`;
  console.log(message);
}
