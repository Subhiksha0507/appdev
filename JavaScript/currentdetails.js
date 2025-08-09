var today = new Date();

var day = today.getDate();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var month = monthNames[today.getMonth()];
var year = today.getFullYear();

var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12; // hour '0' should be '12'
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

var timeStr = hours + ":" + minutes + ":" + seconds + " " + ampm;

document.write("<hr>");
document.write("<b>Today is</b> " + day + " - " + month + " - " + year + ".<br>");
document.write("<b>Current time is</b> " + timeStr + ".");
