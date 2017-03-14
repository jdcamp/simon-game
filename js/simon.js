function SimonGame (){
  this.gameStream = [];
  this.score = 0;
}

SimonGame.prototype.randomColor = function(){
  var colorNumber = Math.floor(Math.random()* 5);
  var color;
  switch (colorNumber) {
    case 1: color = 'red'; break;
    case 2: color = 'green'; break;
    case 3: color = 'blue'; break;
    case 4: color = 'yellow'; break;
    default: alert("Error with randomColor function"); break;
  }
  return color;
};

SimonGame.prototype.addToStream = function(color){
  this.gameStream.push(color);
};

SimonGame.prototype.compareToStream = function(userArray){
  var gameStreamCompareString = this.gameStream.toString;
  var userArrayCompareString = userArray.toString;
  if (userArrayCompareString === gameStreamCompareString){
    return true;
  } else {
    return false;
  }
};
