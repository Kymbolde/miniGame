angular.module('mini')
.controller('simonYellowDirCtrl', function($scope, simonServ){
  $scope.yellowLogic = function(){
    simonServ.yellowLogic();
  }
})
