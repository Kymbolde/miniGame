angular.module('mini')
.directive('simonGreenDir', function($document){
  return {
  restrict: 'A',
  controller: 'simonGreenDirCtrl',
  link: function(s, e, a){
    e.on('mousedown', function(){
      $('.simonGreen').css('background', 'rgb(0, 255, 0)')
    })
    e.on('mouseup', function(){
      $('.simonGreen').css('background', 'rgb(0, 186, 0)')
    })
  }
}
})
