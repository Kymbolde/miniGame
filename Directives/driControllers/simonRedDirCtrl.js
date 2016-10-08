angular.module('mini')
.controller('simonRedDirCtrl', function($scope, simonServ){
  $scope.redLogic = function(){
    simonServ.redLogic();
  }
})
