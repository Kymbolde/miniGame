angular.module('mini')
.controller('simonLogicDirCtrl', function($scope, simonServ){
  $scope.simonLogic = function(){
    simonServ.simonLogic();
  }
})
