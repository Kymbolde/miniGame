angular.module('mini')
.directive('simonYellowDir', function($document){
  return {
  restrict: 'A',
  controller: 'simonYellowDirCtrl',
  link: function(s, e, a){
    e.on('mousedown', function(){
      $('.simonYellow').css('background', 'rgb(255, 255, 0)')
    })
    e.on('mouseup', function(){
      $('.simonYellow').css('background', 'rgb(186, 186, 0)')
    })
  }
}
})
