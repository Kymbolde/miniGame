angular.module('mini')
.directive('simonLogicDir', function($document){
  return {
  restrict: 'A',
  controller: 'simonLogicDirCtrl',
  link: function(s, e, a){
    e.on('mousedown', function(){
      $('.simonMiddle2').css('background', 'rgb(100, 100, 100)')
    })
    e.on('mouseup', function(){
      $('.simonMiddle2').css('background', 'rgb(140, 140, 140)')
    })
  }
}
})
