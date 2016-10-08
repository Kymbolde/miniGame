angular.module('mini')
    .service('simonServ', function() {
        var gameArrs = [];
        var compairArrs = [];
        this.redLogic = function() {
            compairArrs.push(1)
            console.log(gameArrs, compairArrs);
        }
        this.blueLogic = function() {
            compairArrs.push(2)
            console.log(gameArrs, compairArrs);
        }
        this.yellowLogic = function() {
            compairArrs.push(3)
            console.log(gameArrs, compairArrs);
        }
        this.greenLogic = function() {
            compairArrs.push(4)
            console.log(gameArrs, compairArrs);
        }
        this.simonLogic = function() {
            if (gameArrs.length === compairArrs.length) {
                var flag = true;
                for (var i = 0; i < gameArrs.length; i++) {
                    if (gameArrs[i] !== compairArrs[i]) {
                        alert('Entry ' + (i + 1) + ' was wrong. YOU SHALL NOT PASS!')
                        flag = false;
                        location.reload();
                    }

                }
                if (flag === true) {
                    gameArrs.push(Math.floor(Math.random() * (4 - 1 + 1) + 1));


                    function lightUp(i, length) {
                        if (i >= length) {
                          compairArrs=[];
                            return;
                        }

                        if (gameArrs[i] === 1) {
                            $('.simonRed').css('background', 'rgb(255, 0, 0)');
                            setTimeout(function() {
                                $('.simonRed').css('background', 'rgb(186, 0, 0)');
                                lightUp(i + 1, length);
                            }, 500);
                        } else if (gameArrs[i] === 2) {
                            $('.simonBlue').css('background', 'rgb(0, 0, 255)');
                            setTimeout(function() {
                                $('.simonBlue').css('background', 'rgb(0, 0, 186)');
                                lightUp(i + 1, length);
                            }, 500);
                        } else if (gameArrs[i] === 3) {
                            $('.simonYellow').css('background', 'rgb(255, 255, 0)');
                            setTimeout(function() {
                                $('.simonYellow').css('background', 'rgb(186, 186, 0)');
                                lightUp(i + 1, length);
                            }, 500);
                        } else if (gameArrs[i] === 4) {
                            $('.simonGreen').css('background', 'rgb(0, 255, 0)');
                            setTimeout(function() {
                                $('.simonGreen').css('background', 'rgb(0, 186, 0)');
                                lightUp(i + 1, length);
                            }, 500);
                        }

                    }
                    lightUp(0, gameArrs.length);




                    //
                    // for (var i = 0; i < gameArrs.length; i++) {
                    //   if (gameArrs[i] === 1) {
                    //     $('.simonRed').css('background', 'rgb(255, 0, 0)');
                    //     setTimeout(function(){$('.simonRed').css('background', 'rgb(186, 0, 0)');}, 500);
                    //   }else if (gameArrs[i] === 2) {
                    //     $('.simonBlue').css('background', 'rgb(0, 0, 255)');
                    //     setTimeout(function(){$('.simonBlue').css('background', 'rgb(0, 0, 186)');}, 500);
                    //   }else if (gameArrs[i] === 3) {
                    //     $('.simonYellow').css('background', 'rgb(255, 255, 0)');
                    //     setTimeout(function(){$('.simonyellow').css('background', 'rgb(186, 186, 0)');}, 500);
                    //   }else if (gameArrs[i] === 4) {
                    //     $('.simonGreen').css('background', 'rgb(0, 255, 0)');
                    //     setTimeout(function(){$('.simonGreen').css('background', 'rgb(0, 186, 0)');}, 500);
                    //   }
                    // }

                }
            }else{
              alert('You did not enter the right number of entries. YOU SHALL NOT PASS!')
              location.reload();
            }
        }
    })
