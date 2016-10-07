angular.module('mini')
.controller('mazeCtrl', function($scope, mainServ){
  $scope.showme=true;
  $scope.gameOver = function() {
    mainServ.gameOver();
  }
  $scope.youWin = function() {
    mainServ.youWin();
  }
})
