var today = moment()
var currentTimeEl = $('#current-time');
var currentTime = today.format("MMM, Do, YYYY");

currentTimeEl.text(currentTime);
console.log(currentTime);