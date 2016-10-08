angular.module('mini')
.controller('simonGreenDirCtrl', function($scope, simonServ){
  $scope.greenLogic = function(){
    simonServ.greenLogic();
  }
})
