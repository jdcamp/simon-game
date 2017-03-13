
function countDown() {
  var timer = 3;
  for (var i = 3; i > 0; i--) {
    setTimeout(function() {
      $('#count').append(i);},1000);
  }
}

$(document).ready(function() {


  countDown();


});
