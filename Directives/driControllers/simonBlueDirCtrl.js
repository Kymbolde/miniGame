angular.module('mini')
.controller('simonBlueDirCtrl', function($scope, simonServ){
  $scope.blueLogic = function(){
    simonServ.blueLogic();
  }
})
