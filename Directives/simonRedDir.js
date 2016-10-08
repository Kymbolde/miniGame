angular.module('mini')
.directive('simonRedDir', function($document){
  return {
  restrict: 'A',
  controller: 'simonRedDirCtrl',
  link: function(s, e, a){
    e.on('mousedown', function(){
      $('.simonRed').css('background', 'rgb(255, 0, 0)')
    })
    e.on('mouseup', function(){
      $('.simonRed').css('background', 'rgb(186, 0, 0)')
    })
  }
}
})
