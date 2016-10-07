angular.module('mini')
.service('mainServ', function(){
  this.gameOver = function (){
    alert ('Game Over');
  };
  this.youWin = function (){
    alert ('You WIN!!!');
  };
})
