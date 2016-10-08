angular.module('mini')
.directive('simonBlueDir', function($document){
  return {
  restrict: 'A',
  controller: 'simonBlueDirCtrl',
  link: function(s, e, a){
    e.on('mousedown', function(){
      $('.simonBlue').css('background', 'rgb(0, 0, 255)')
    })
    e.on('mouseup', function(){
      $('.simonBlue').css('background', 'rgb(0, 0, 186)')
    })
  }
}
})
