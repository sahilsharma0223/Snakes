// alert("click on dice when it shows 1 dot.");
var audio;
var diceMove = 0;
var diceRolled1 = 0;
var diceRolled2 = 0;
var x = 0;
var y = 0;
var p = 0;
var q = 0;
var u = 0;
var v = 0;
var time = 800;
var pos1 = 0;
var pos2 = 0;
var prevy = 0;
var firstSix = 0;
var diceNumber = 0;
var prev;
var f = 0;
var g = 0;
var prevx = 0;
var prev61 = 0;
var prev62 = 0;
var a=1;
var m = 0;
var dicePos = Math.floor(Math.random() * 2 + 1);
if (dicePos == 1) {
  $(".dice").addClass("dice1");
  $(".side").addClass("side1");
  diceMove = 1;
}

$(".button1").click(function(){
  $(".button1").css("transform","translateY(15px) scale(1.2)");
  setTimeout(function(){
    $(".button1").css("transform","translateY(0)");
    setTimeout(function(){
      $(".major").css("filter","blur(10px)");
      $(".helpContent").css("transform","translateY(0)");
      $(".buttons,.dice").css("pointer-events","none");
    },200);
  },300);
});

$(".button2").click(function(){
  $(".button2").css("transform","translateY(15px) scale(1.2)  rotate(-360deg)");
  setTimeout(function(){
    $(".button2").css("transform","translateY(0)");
    location.reload();
  },300);
});

$(".button3").click(function(){
  $(".button3").css("transform","translateY(15px) scale(1.2)");
  setTimeout(function(){
    $(".button3").css("transform","translateY(0)");
  },300);

});


$(".button4").click(function(){
  $(".button4").css("transform","translateY(15px) scale(1.2)");
  setTimeout(function(){
    $(".button4").css("transform","translateY(0) scale(1)");
  },300);
  if(a==1){
      $(".button4").children('img').attr("src","css/images/speakeroff.png");
      a=0;
  }
  else{
      $(".button4").children('img').attr("src","css/images/speaker.png");
      a=1;
  }
});

$(".ok").click(function(){
  $(".ok").css("transform","translateY(10px)");
  setTimeout(function(){
    $(".ok").css("transform","translateY(0)");
  },300);
  $(".helpContent").css("transform","translateY(-1000px)");
  setTimeout(function(){
      $(".major").css("filter","blur(0px)");
      $(".buttons,.dice").css("pointer-events","auto");
  },700);

});


$(".dice").click(function() {
  if(a==1){
    audio = new Audio("sounds/dice.mp3");
    audio.play();
  }

  $(".dice").css("pointer-events","none");
  time = 800;
  $(".piece1").addClass("traclass");
  $(".piece2").addClass("traclass");
  prev = diceNumber;
  // diceNumber =6-f;
  // f=2;
  diceNumber = Math.floor(Math.random() * 6 + 1);
  // if (g == 0) {
  //   diceNumber = 6;
  //   g = 1;
  // } else if (g == 1) {
  //   diceNumber = 30;
  //   g = 2;
  // } else if (g == 2) {
  //   diceNumber = 2;
  //   g = 3;
  // } else if (g == 3) {
  //   diceNumber = 20;
  //   g = 4;
  // } else if (g == 4) {
  //   diceNumber = 2;
  //   g = 5;
  // } else if (g == 5) {
  //   diceNumber = 6;
  //   g = 6;
  // } else if (g == 6) {
  //   diceNumber = 3;
  //   g = 7;
  // } else if (g == 7) {
  //   diceNumber = 1;
  //   g = 8;
  // } else if (g == 8) {
  //   diceNumber = 6;
  //   g = 9;
  // } else if (g == 9) {
  //   diceNumber = 0;
  //   g = 10;
  // } else if (g == 10) {
  //   diceNumber = 30;
  //   g = 11;
  // } else if (g == 11) {
  //   diceNumber = 1;
  //   g = 12;
  // } else if (g == 12) {
  //   diceNumber = 5;
  //   g = 13;
  // }
  // else if (g == 13) {
  //   diceNumber = 5;
  //   g = 14;
  // }
  // else if (g == 14) {
  //   diceNumber = 1;
  //   g = 15;
  // }
  //  else if (g == 15) {
  //    diceNumber = 5;
  //    g = 16;
  // }
  //  else if (g == 16) {
  //    diceNumber = 1;
  //    g = 17;
  //  }
  var animation = "animation" + diceNumber;
  console.log(time);
  $(".dice").addClass("animations");

  setTimeout(function() {
    $(".dice").removeClass("animations");
    console.log(time);
    $(".dice").addClass(animation);
    console.log(diceMove);
    setTimeout(function() {
      console.log(time);
      $(".dice").removeClass(animation);
      console.log(diceMove);
      console.log(diceNumber);
      if (diceNumber !== 6 && diceMove === 0) {
        $(".dice").addClass("dice1");
        $(".side").addClass("side1");
        console.log(diceMove);
        diceMove = 1;
        console.log(diceMove);
          $(".dice").css("pointer-events","auto");

      } else if (diceNumber !== 6 && diceMove === 1) {
        $(".dice").removeClass("dice1");
        $(".side").removeClass("side1");
        console.log(diceMove);
        diceMove = 0;
        console.log(diceMove);
          $(".dice").css("pointer-events","auto");
      }
      else{
        $(".dice").css("pointer-events","auto");
      }


    }, time + 60);

  }, 400);


  console.log(diceMove);

  if (diceMove === 0) {
    console.log(x);
    console.log(y);
    if (diceNumber === 6 && diceRolled1 === 0) {
      $(".pieceouter1").css("transform", "translate(0,0)");
      $(".piece1").css("transform", "translate(-10px, 288px)");
      $(".piece1").addClass("traclass");

      diceRolled1 = 1;
      prev61 = 6;
      console.log(prev61);
      console.log(prev62);
      console.log(diceNumber);
      console.log(pos1);

    } else if (diceRolled1 === 1) {

      console.log(prev61);
      console.log(prev62);
      console.log(diceNumber);
      console.log(pos1);
      console.log(firstSix);
      if (prev61 + prev62 + diceNumber == 18) {
        diceNumber = -1;
        prev61 = 0;
        prev62 = 0;

      } else if (diceNumber == 6 && prev61 == 6) {
        prev62 = 6;
        pos1 += diceNumber;

      } else if (diceNumber == 6) {
        prev61 = 6;
        pos1 += diceNumber;
      } else {
        prev61 = 0;
        prev62 = 0;
        pos1 += diceNumber;
      }
      console.log(firstSix);
      console.log(prev61);
      console.log(prev62);
      console.log(diceNumber);
      console.log(pos1);
      if (pos1 < 101 && diceNumber != -1) {

        y = 288 - u * 52;
        if (u % 2 == 0) {
          x = x + 52 * diceNumber;

        } else {
          x = x - 52 * diceNumber;
        }

        console.log(x);
        console.log(y);
        if (x >= 0 && x <= 520 && u % 2 == 0) {
          console.log(pos1);
          $(".pieceouter1").css("transform", "translate(0,0)");
          $(".piece1").css("transform", "translate(" + x + "px," + y + "px )");
          $(".piece1").addClass("traclass");
          console.log(pos1);
          prevx += diceNumber;
        } else if (x > 0 && x <= 520 && u % 2 != 0) {

          x = 520 - 52 * (diceNumber + (prevx % (10 * u)) - 1);

          $(".pieceouter1").css("transform", "translate(0,0)");
          $(".piece1").css("transform", "translate(" + x + "px," + y + "px )");
          prevx += diceNumber;

        } else if (x >= 520) {

          console.log(x);
          console.log(y);
          x = 520 - 52 * (diceNumber - ((u + 1) * 10 + 1 - prevx));
          y = 288 - 52 * (u + 1);
          console.log(x);
          console.log(y);
          $(".pieceouter1").css("transform", "translate(0,0)");
          $(".piece1").css("transform", "translate(520px," + (y + 52) + "px)");
          $(".piece1").addClass("traclass");
          setTimeout(function() {
            console.log(x);
            console.log(y);
            $(".piece1").css("transform", "translate(520px," + y + "px)");
            setTimeout(function() {
              console.log(x);
              console.log(y);
              if (x > 0) {
                $(".piece1").css("transform", "translate(" + x + "px, " + y + "px)");
              } else {
                u++;
                x = 52 + 52 * (pos1 - 10 * u - 1);
                y = 288 - 52 * (u);
                $(".pieceouter1").css("transform", "translate(0,0)");
                $(".piece1").css("transform", "translate(52px, " + (y + 52) + "px)");
                $(".piece1").addClass("traclass");
                setTimeout(function() {
                  console.log(x);
                  console.log(y);
                  $(".piece1").css("transform", "translate(52px, " + y + "px)");
                  setTimeout(function() {
                    console.log(x);
                    console.log(y);
                    $(".piece1").css("transform", "translate(" + x + "px, " + y + "px)");
                  }, 700);
                }, 700);
              }
            }, 700);
          }, 700);


          u++;
          prevx += diceNumber;
        } else if (x <= 0) {

          u++;
          x = 52 + 52 * (diceNumber - (u * 10 + 1 - prevx));
          y = 288 - 52 * u;
          console.log(x);
          console.log(y);
          $(".pieceouter1").css("transform", "translate(0,0)");
          $(".piece1").css("transform", "translate(52px, " + (y + 52) + "px)");
          $(".piece1").addClass("traclass");
          setTimeout(function() {
            console.log(x);
            console.log(y);
            $(".piece1").css("transform", "translate(52px, " + y + "px)");
            setTimeout(function() {
              console.log(x);
              console.log(y);
              if (x <= 520) {
                $(".piece1").css("transform", "translate(" + x + "px, " + y + "px)");
              } else {
                u++;

                x = 520 - 52 * (pos1 - 10 * u - 1);
                y = 288 - 52 * u;
                $(".pieceouter1").css("transform", "translate(0,0)");
                $(".piece1").css("transform", "translate(520px," + (y + 52) + "px)");
                $(".piece1").addClass("traclass");
                setTimeout(function() {
                  console.log(x);
                  console.log(y);
                  $(".piece1").css("transform", "translate(520px," + y + "px)");
                  setTimeout(function() {
                    console.log(x);
                    console.log(y);
                    $(".piece1").css("transform", "translate(" + x + "px, " + y + "px)");
                  }, 700);
                }, 700);
              }

            }, 700);
          }, 700);

          prevx += diceNumber;

        }
        ladders();
        snakes();
        setTimeout(function() {
          if (diceRolled1 === 1 && diceRolled2 === 1) {
            cross();
          }
        }, time + 50);

      } else if (pos1 == 101) {
        $(".piece1").css("transform", "translate(0,-180px)");
        if(a==1){
          audio = new Audio("sounds/winning.mp3");
          audio.play();
        }
        setTimeout(function() {
          alert("player red won the game");
          location.reload();
        }, 1500);

      } else if (pos1 > 101) {
        console.log(pos1);
        prev61 = 0;
        prev62 = 0;
        pos1 = pos1 - diceNumber;
        console.log(pos1);
        console.log(diceNumber);
        if (diceNumber == 6) {
          diceMove = 0;
          diceNumber = -1;
          console.log(diceNumber);
        }
      }

    }

  } else {
    console.log(p);
    console.log(q);
    if (diceNumber === 6 && diceRolled2 === 0) {
      $(".piece2").css("transform", "translate(-10px, 180px)");
      $(".piece2").addClass("traclass");
      diceRolled2 = 1;
      prev61 = 6;

    } else if (diceRolled2 === 1) {
      if (prev61 + prev62 + diceNumber == 18) {
        diceNumber = -1;
        prev61 = 0;
        prev62 = 0;
      } else if (diceNumber == 6 && prev61 == 6) {
        prev62 = 6;

        pos2 += diceNumber;
      } else if (diceNumber == 6) {
        prev61 = 6;

        pos2 += diceNumber;
      } else {
        prev61 = 0;
        prev62 = 0;
        pos2 += diceNumber;

      }
      if (pos2 < 101 && diceNumber != -1) {

        q = 180 - v * 52;
        if (v % 2 == 0) {
          p = p + 52 * diceNumber;

        } else {
          p = p - 52 * diceNumber;
        }
        console.log(p);
        console.log(q);

        if (p >= 0 && p <= 520 && v % 2 == 0) {
          $(".pieceouter2").css("transform", "translate(0,0)")
          $(".piece2").css("transform", "translate(" + p + "px," + q + "px )");
          $(".piece2").addClass("traclass");
          prevy += diceNumber;
        } else if (p > 0 && p <= 520 && v % 2 != 0) {

          p = 520 - 52 * (diceNumber + (prevy % (10 * v)) - 1);

          $(".pieceouter2").css("transform", "translate(0,0)");
          $(".piece2").css("transform", "translate(" + p + "px," + q + "px )");
          prevy += diceNumber;

        } else if (p >= 520) {

          p = 520 - 52 * (diceNumber - ((v + 1) * 10 + 1 - prevy));
          q = 180 - 52 * (v + 1);
          $(".pieceouter2").css("transform", "translate(0,0)");
          $(".piece2").css("transform", "translate(520px," + (q + 52) + "px)");
          $(".piece2").addClass("traclass");
          setTimeout(function() {
            $(".piece2").css("transform", "translate(520px," + q + "px)");
            setTimeout(function() {
              if (p > 0) {
                $(".piece2").css("transform", "translate(" + p + "px, " + q + "px)");
              } else {
                v++;
                p = 52 + 52 * (pos2 - 10 * v - 1);
                q = 180 - 52 * (v);
                $(".pieceouter2").css("transform", "translate(0,0)");
                $(".piece2").css("transform", "translate(52px, " + (q + 52) + "px)");
                $(".piece2").addClass("traclass");
                setTimeout(function() {
                  $(".piece2").css("transform", "translate(52px, " + q + "px)");
                  setTimeout(function() {
                    $(".piece2").css("transform", "translate(" + p + "px, " + q + "px)");
                  }, 700);
                }, 700);
              }

            }, 700);
          }, 700);
          v++;
          prevy += diceNumber;
        } else if (p <= 0) {

          v++;
          p = 52 + 52 * (diceNumber - (v * 10 + 1 - prevy));
          q = 180 - 52 * v;
          $(".pieceouter2").css("transform", "translate(0,0)");
          $(".piece2").css("transform", "translate(52px, " + (q + 52) + "px)");
          $(".piece2").addClass("traclass");
          setTimeout(function() {
            $(".piece2").css("transform", "translate(52px, " + q + "px)");
            setTimeout(function() {
              if (p <= 520) {
                $(".piece2").css("transform", "translate(" + p + "px, " + q + "px)");
              } else {
                v++;
                p = 520 - 52 * (pos2 - 10 * v - 1);
                q = 180 - 52 * v;
                $(".pieceouter2").css("transform", "translate(0,0)");
                $(".piece2").css("transform", "translate(520px," + (q + 52) + "px)");
                $(".piece2").addClass("traclass");
                setTimeout(function() {
                  $(".piece2").css("transform", "translate(520px," + q + "px)");
                  setTimeout(function() {
                    $(".piece2").css("transform", "translate(" + p + "px, " + q + "px)");
                  }, 700);
                }, 700);

              }

            }, 700);
          }, 700);

          prevy += diceNumber;

        }
        ladders();
        snakes();
        setTimeout(function() {
          if (diceRolled1 === 1 && diceRolled2 === 1) {
            cross();
          }
        }, time + 50);
      } else if (pos2 == 101) {
        $(".piece2").css("transform", "translate(0,-288px)");
        if(a==1){
          audio = new Audio("sounds/winning.mp3");
          audio.play();
        }
        setTimeout(function() {
          alert("Player Purple won the game");
          location.reload();
        }, 1500);
      } else if (pos2 > 101) {
        prev61 = 0;
        prev62 = 0;
        pos2 -= diceNumber;
        if (diceNumber == 6) {
          diceMove = 1;
          diceNumber = 5;
        }
      }
    }
  }


});



function cross() {
  console.log(diceMove);
  console.log(x);
  console.log(y);
  console.log(p);
  console.log(q);
  console.log(pos1);
  console.log(pos2);
  if (pos1 === pos2 && diceMove === 0) {
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/fail.mp3");
        audio.play();
      }
      $(".piece2").css("transform", "translate(0,0)");
      diceRolled2 = 0;
      p = 0;
      q = 0;
      v = 0;
      pos2 = 0;
      prevy = 0;
    }, 900);

  } else if (pos1 === pos2 && diceMove === 1) {
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/fail.mp3");
        audio.play();
      }
      $(".piece1").css("transform", "translate(0,0)");
      x = 0;
      y = 0;
      u = 0;
      pos1 = 0;
      diceRolled1 = 0;
      prevx = 0;
    }, 900);

  }
  console.log(x);
  console.log(y);
  console.log(p);
  console.log(q);
}



function snakes() {

  if (pos1 == 16) {
    if (diceNumber == 6) {
      time = 1300;
    } else {
      time = 800;
    }
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece1").removeClass("traclass");
      $(".piece1").css("visibility", "hidden");
      $(".testt").addClass("redanimation snake16");
      $(".redanimation").removeClass("testt");
      setTimeout(function() {
        $(".redanimation").addClass("testt");
        $(".testt").removeClass("redanimation snake16");
        $(".piece1").css("transform", "translate(312px,288px)");
        $(".piece1").css("visibility", "visible");

      }, 1000);

      x = 312;
      y = 288;
      prevx = 6;
      u = 0;
      pos1 = 6;
    }, time);
  } else if (pos1 == 47) {

    time = 800;

    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece1").removeClass("traclass");
      $(".piece1").css("visibility", "hidden");
      $(".testt").addClass("redanimation snake47");
      $(".redanimation").removeClass("testt");
      setTimeout(function() {
        $(".redanimation").addClass("testt");
        $(".testt").removeClass("redanimation snake47");
        $(".piece1").css("transform", "translate(312px,184px)");
        $(".piece1").css("visibility", "visible");



      }, 1000);
      x = 312;
      y = 184;
      prevx = 26;
      u = 2;
      pos1 = 26;
    }, time);
  } else if (pos1 == 49) {

    time = 800;
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece1").removeClass("traclass");
      $(".piece1").css("visibility", "hidden");
      $(".testt").addClass("redanimation snake49");
      $(".redanimation").removeClass("testt");
      setTimeout(function() {
        $(".redanimation").addClass("testt");
        $(".testt").removeClass("redanimation snake49");
        $(".piece1").css("transform", "translate(520px,184px)");
        $(".piece1").css("visibility", "visible");



      }, 1000);
      x = 520;
      y = 184;
      prevx = 30;
      u = 2;
      pos1 = 30;
    }, time);
  } else if (pos1 == 56) {
if(diceNumber==6){
  time = 2100;
}
else{
  time = 800;
}

    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece1").removeClass("traclass");
      $(".piece1").css("visibility", "hidden");
      $(".testt").addClass("redanimation snake56");
      $(".redanimation").removeClass("testt");
      setTimeout(function() {
        $(".redanimation").addClass("testt");
        $(".testt").removeClass("redanimation snake56");
        $(".piece1").css("transform", "translate(416px,28px)");
        $(".piece1").css("visibility", "visible");



      }, 1000);
      x = 416;
      y = 28;
      prevx = 53;
      u = 5;
      pos1 = 53;
    }, time);
  } else if (pos1 == 62) {

    if (diceNumber >= 2 && diceNumber <= 6) {
      time = 2100;
    } else {
      time = 800;
    }

    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece1").removeClass("traclass");
      $(".piece1").css("visibility", "hidden");
      $(".testt").addClass("redanimation snake62");
      $(".redanimation").removeClass("testt");
      setTimeout(function() {
        $(".redanimation").addClass("testt");
        $(".testt").removeClass("redanimation snake62");
        $(".piece1").css("transform", "translate(104px,236px)");
        $(".piece1").css("visibility", "visible");



      }, 1000);
      x = 104;
      y = 236;
      prevx = 19;
      u = 1;
      pos1 = 19;
    }, time);
  } else if (pos1 == 63) {

    if (diceNumber >= 3 && diceNumber <= 6) {
      time = 2100;
    } else {
      time = 800;
    }
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece1").removeClass("traclass");
      $(".piece1").css("visibility", "hidden");
      $(".testt").addClass("redanimation snake63");
      $(".redanimation").removeClass("testt");
      setTimeout(function() {
        $(".redanimation").addClass("testt");
        $(".testt").removeClass("redanimation snake63");
        $(".piece1").css("transform", "translate(52px,28px)");
        $(".piece1").css("visibility", "visible");


      }, 1000);
      x = 52;
      y = 28;
      prevx = 60;
      u = 5;
      pos1 = 60;

    }, time);
  } else if (pos1 == 87) {

    time = 800;

    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece1").removeClass("traclass");
      $(".piece1").css("visibility", "hidden");
      $(".testt").addClass("redanimation snake87");
      $(".redanimation").removeClass("testt");
      setTimeout(function() {
        $(".redanimation").addClass("testt");
        $(".testt").removeClass("redanimation snake87");
        $(".piece1").css("transform", "translate(208px,184px)");
        $(".piece1").css("visibility", "visible");


      }, 1800);
      x = 208;
      y = 184;
      prevx = 24;
      u = 2;
      pos1 = 24;

    }, time);
  } else if (pos1 == 93) {

    if (diceNumber >= 3 && diceNumber <= 6) {
      time = 2200;
    } else {
      time = 800;
    }

    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece1").removeClass("traclass");
      $(".piece1").css("visibility", "hidden");
      $(".testt").addClass("redanimation snake93");
      $(".redanimation").removeClass("testt");
      setTimeout(function() {
        $(".redanimation").addClass("testt");
        $(".testt").removeClass("redanimation snake93");
        $(".piece1").css("transform", "translate(416px,-76px)");
        $(".piece1").css("visibility", "visible");



      }, 1000);
      x = 416;
      y = -76;
      prevx = 73;
      u = 7;
      pos1 = 73;
    }, time);
  } else if (pos1 == 95) {

    if (diceNumber >= 5 && diceNumber <= 6) {
      time = 2200;
    } else {
      time = 800;
    }
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece1").removeClass("traclass");
      $(".piece1").css("visibility", "hidden");
      $(".testt").addClass("redanimation snake95");
      $(".redanimation").removeClass("testt");
      setTimeout(function() {
        $(".redanimation").addClass("testt");
        $(".testt").removeClass("redanimation snake95");
        $(".piece1").css("transform", "translate(312px,-76px)");
        $(".piece1").css("visibility", "visible");



      }, 1000);
      x = 312;
      y = -76;
      prevx = 75;
      u = 7;
      pos1 = 75;
    }, time);
  } else if (pos1 == 98) {

    time = 800;

    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece1").removeClass("traclass");
      $(".piece1").css("visibility", "hidden");
      $(".testt").addClass("redanimation snake98");
      $(".redanimation").removeClass("testt");
      setTimeout(function() {
        $(".redanimation").addClass("testt");
        $(".testt").removeClass("redanimation snake98");
        $(".piece1").css("transform", "translate(156px,-76px)");
        $(".piece1").css("visibility", "visible");


      }, 900);
      x = 156;
      y = -76;
      prevx = 78;
      u = 7;
      pos1 = 78;

    }, time);
  } else if (pos2 == 16) {
    if (diceNumber == 6) {
      time = 1300;
    } else {
      time = 800;
    }
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece2").removeClass("traclass");
      $(".piece2").css("visibility", "hidden");
      $(".testt").addClass("purpleanimation snake16");
      $(".purpleanimation").removeClass("testt");
      setTimeout(function() {
        $(".purpleanimation").addClass("testt");
        $(".testt").removeClass("purpleanimation snake16");
        $(".piece2").css("transform", "translate(312px,180px)");
        $(".piece2").css("visibility", "visible");



      }, 1000);
      p = 312;
      q = 180;
      prevy = 6;
      v = 0;
      pos2 = 6;
    }, time);
  } else if (pos2 == 47) {

    time = 800;

    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece2").removeClass("traclass");
      $(".piece2").css("visibility", "hidden");
      $(".testt").addClass("purpleanimation snake47");
      $(".purpleanimation").removeClass("testt");
      setTimeout(function() {
        $(".purpleanimation").addClass("testt");
        $(".testt").removeClass("purpleanimation snake47");
        $(".piece2").css("transform", "translate(312px,76px)");
        $(".piece2").css("visibility", "visible");


      }, 1000);
      p = 312;
      q = 76;
      prevy = 26;
      v = 2;
      pos2 = 26;

    }, time);
  } else if (pos2 == 49) {

    time = 800;
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece2").removeClass("traclass");
      $(".piece2").css("visibility", "hidden");
      $(".testt").addClass("purpleanimation snake49");
      $(".purpleanimation").removeClass("testt");
      setTimeout(function() {
        $(".purpleanimation").addClass("testt");
        $(".testt").removeClass("purpleanimation snake49");
        $(".piece2").css("transform", "translate(520px,76px)");
        $(".piece2").css("visibility", "visible");



      }, 1000);
      p = 520;
      q = 76;
      prevy = 30;
      v = 2;
      pos2 = 30;
    }, time);
  } else if (pos2 == 56) {

    if(diceNumber==6){
      time = 2100;
    }
    else{
      time = 800;
    }

    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece2").removeClass("traclass");
      $(".piece2").css("visibility", "hidden");
      $(".testt").addClass("purpleanimation snake56");
      $(".purpleanimation").removeClass("testt");
      setTimeout(function() {
        $(".purpleanimation").addClass("testt");
        $(".testt").removeClass("purpleanimation snake56");
        $(".piece2").css("transform", "translate(416px,-80px)");
        $(".piece2").css("visibility", "visible");



      }, 1000);
      p = 416;
      q = -80;
      prevy = 53;
      v = 5;
      pos2 = 53;
    }, time);
  } else if (pos2 == 62) {

    if (diceNumber >= 2 && diceNumber <= 6) {
      time = 2100;
    } else {
      time = 800;
    }

    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece2").removeClass("traclass");
      $(".piece2").css("visibility", "hidden");
      $(".testt").addClass("purpleanimation snake62");
      $(".purpleanimation").removeClass("testt");
      setTimeout(function() {
        $(".purpleanimation").addClass("testt");
        $(".testt").removeClass("purpleanimation snake62");
        $(".piece2").css("transform", "translate(104px,128px)");
        $(".piece2").css("visibility", "visible");



      }, 1000);
      p = 104;
      q = 128;
      prevy = 19;
      v = 1;
      pos2 = 19;
    }, time);
  } else if (pos2 == 63) {

    if (diceNumber >= 3 && diceNumber <= 6) {
      time = 2100;
    } else {
      time = 800;
    }
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece2").removeClass("traclass");
      $(".piece2").css("visibility", "hidden");
      $(".testt").addClass("purpleanimation snake63");
      $(".purpleanimation").removeClass("testt");
      setTimeout(function() {
        $(".purpleanimation").addClass("testt");
        $(".testt").removeClass("purpleanimation snake63");
        $(".piece2").css("transform", "translate(52px,-80px)");
        $(".piece2").css("visibility", "visible");


      }, 1000);

      p = 52;
      q = -80;
      prevy = 60;
      v = 5;
      pos2 = 60;
    }, time);
  } else if (pos2 == 87) {

    time = 800;

    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece2").removeClass("traclass");
      $(".piece2").css("visibility", "hidden");
      $(".testt").addClass("purpleanimation snake87");
      $(".purpleanimation").removeClass("testt");
      setTimeout(function() {
        $(".purpleanimation").addClass("testt");
        $(".testt").removeClass("purpleanimation snake87");
        $(".piece2").css("transform", "translate(208px,76px)");
        $(".piece2").css("visibility", "visible");



      }, 1800);
      p = 208;
      q = 76;
      prevy = 24;
      v = 2;
      pos2 = 24;
    }, time);
  } else if (pos2 == 93) {

    if (diceNumber >= 3 && diceNumber <= 6) {
      time = 2200;
    } else {
      time = 800;
    }
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece2").removeClass("traclass");
      $(".piece2").css("visibility", "hidden");
      $(".testt").addClass("purpleanimation snake93");
      $(".purpleanimation").removeClass("testt");
      setTimeout(function() {
        $(".purpleanimation").addClass("testt");
        $(".testt").removeClass("purpleanimation snake93");
        $(".piece2").css("transform", "translate(416px,-184px)");
        $(".piece2").css("visibility", "visible");


      }, 1000);
      p = 416;
      q = -184;
      prevy = 73;
      v = 7;
      pos2 = 73;

    }, time);
  } else if (pos2 == 95) {

    if (diceNumber >= 5 && diceNumber <= 6) {
      time = 2200;
    } else {
      time = 800;
    }
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece2").removeClass("traclass");
      $(".piece2").css("visibility", "hidden");
      $(".testt").addClass("purpleanimation snake95");
      $(".purpleanimation").removeClass("testt");
      setTimeout(function() {
        $(".purpleanimation").addClass("testt");
        $(".testt").removeClass("purpleanimation snake95");
        $(".piece2").css("transform", "translate(312px,-184px)");
        $(".piece2").css("visibility", "visible");


      }, 1000);

      p = 312;
      q = -184;
      prevy = 75;
      v = 7;
      pos2 = 75;
    }, time);
  } else if (pos2 == 98) {

    time = 800;
    setTimeout(function() {
      if(a==1){
        audio = new Audio("sounds/snake.mp3");
        audio.play();
      }
      $(".piece2").removeClass("traclass");
      $(".piece2").css("visibility", "hidden");
      $(".testt").addClass("purpleanimation snake98");
      $(".purpleanimation").removeClass("testt");
      setTimeout(function() {
        $(".purpleanimation").addClass("testt");
        $(".testt").removeClass("purpleanimation snake98");
        $(".piece2").css("transform", "translate(156px,-184px)");
        $(".piece2").css("visibility", "visible");


      }, 900);
      p = 156;
      q = -184;
      prevy = 78;
      v = 7;
      pos2 = 78;

    }, time);
  }
}



function ladders() {

  time = 800;

  if (pos1 == 1) {
    time = 700;
    setTimeout(function() {
      $(".piece1").removeClass("traclass");
      $(".pieceouter1").css("transform", "translateX(156px)");
      $(".pieceouter1").addClass("ladder1x");
      $(".piece1").css("transform", "translateY(132px)");
      $(".piece1").addClass("ladder1y");
      setTimeout(function() {
        $(".pieceouter1").removeClass("ladder1x");
        $(".piece1").removeClass("ladder1y");
        $(".pieceouter1").css("transform", "translate(0,0)");
        $(".piece1").css("transform", "translate(156px,132px)");
      }, 700);
      x = 156;
      y = 132;
      prevx = 38;
      u = 3;
      pos1 = 38;
    }, time);


  } else if (pos1 == 4) {
    time = 700;
    setTimeout(function() {
      $(".piece1").removeClass("traclass");
      $(".pieceouter1").css("transform", "translateX(364px)");
      $(".pieceouter1").addClass("ladder4x");
      $(".piece1").css("transform", "translateY(236px)");
      $(".piece1").addClass("ladder4y");
      setTimeout(function() {
        $(".pieceouter1").removeClass("ladder4x");
        $(".piece1").removeClass("ladder4y");
        $(".pieceouter1").css("transform", "translate(0,0)");
        $(".piece1").css("transform", "translate(364px,236px)");
      }, 700);
      x = 364;
      y = 236;
      prevx = 14;
      u = 1;
      pos1 = 14;
    }, time);


  } else if (pos1 == 9) {
    time = 900;
    setTimeout(function() {
      $(".piece1").removeClass("traclass");
      $(".pieceouter1").css("transform", "translateX(520px)");
      $(".pieceouter1").addClass("ladder9x");
      $(".piece1").css("transform", "translateY(132px)");
      $(".piece1").addClass("ladder9y");
      setTimeout(function() {
        $(".pieceouter1").removeClass("ladder9x");
        $(".piece1").removeClass("ladder9y");
        $(".pieceouter1").css("transform", "translate(0,0)");
        $(".piece1").css("transform", "translate(520px,132px)");
      }, 700);
      x = 520;
      y = 132;
      prevx = 31;
      u = 3;
      pos1 = 31;
    }, time);


  } else if (pos1 == 21) {
    time = 1500;
    setTimeout(function() {
      console.log(x);
      console.log(y);
      $(".piece1").removeClass("traclass");
      $(".pieceouter1").css("transform", "translateX(104px)");
      $(".pieceouter1").addClass("ladder1x");
      $(".piece1").css("transform", "translateY(80px)");
      $(".piece1").addClass("ladder1y");
      setTimeout(function() {
        console.log(x);
        console.log(y);
        $(".pieceouter1").removeClass("ladder1x");
        $(".piece1").removeClass("ladder1y");
        $(".pieceouter1").css("transform", "translate(0,0)");
        $(".piece1").css("transform", "translate(104px,80px)");
      }, 700);
      x = 104;
      y = 80;
      prevx = 42;
      u = 4;
      pos1 = 42;
    }, time);
  } else if (pos1 == 28) {

    time = 800;
    setTimeout(function() {
      $(".piece1").removeClass("traclass");
      $(".pieceouter1").css("transform", "translateX(375px)");
      $(".pieceouter1").addClass("ladder28x1");
      $(".piece1").css("transform", "translateY(80px)");
      $(".piece1").addClass("ladder28y1");

      setTimeout(function() {
        $(".pieceouter1").removeClass("ladder28x1");
        $(".piece1").removeClass("ladder28y1");
        $(".pieceouter1").css("transform", "translate(0,0)");
        $(".piece1").css("transform", "translate(375px,80px)");

        $(".pieceouter1").css("transform", "translateX(280px)");
        $(".pieceouter1").addClass("ladder28x");
        $(".piece1").css("transform", "translateY(-76px)");
        $(".piece1").addClass("ladder28y");
        setTimeout(function() {
          $(".pieceouter1").removeClass("ladder28x");
          $(".piece1").removeClass("ladder28y");
          $(".pieceouter1").css("transform", "translate(0,0)");
          $(".piece1").css("transform", "translate(280px,-76px)");

          $(".pieceouter1").css("transform", "translateX(208px)");
          $(".pieceouter1").addClass("ladder28y2");
          $(".piece1").css("transform", "translateY(-128px)");
          $(".piece1").addClass("ladder28x2");
          setTimeout(function() {
            $(".pieceouter1").removeClass("ladder28y2");
            $(".piece1").removeClass("ladder28x2");
            $(".pieceouter1").css("transform", "translate(0,0)");
            $(".piece1").css("transform", "translate(208px,-128px)");

          }, 800);
        }, 900);
      }, 800);
      x = 208;
      y = -128;
      prevx = 84;
      u = 8;
      pos1 = 84;
    }, time);
  } else if (pos1 == 36) {
    if (diceNumber == 6) {
      time = 2200;
    } else {
      time = 800;
    }
    setTimeout(function() {
      console.log(x);
      console.log(y);
      $(".piece1").removeClass("traclass");
      $(".pieceouter1").css("transform", "translateX(208px)");
      $(".pieceouter1").addClass("ladder9y");
      $(".piece1").css("transform", "translateY(80px)");
      $(".piece1").addClass("ladder9x");
      setTimeout(function() {
        console.log(x);
        console.log(y);
        $(".pieceouter1").removeClass("ladder9y");
        $(".piece1").removeClass("ladder9x");
        $(".pieceouter1").css("transform", "translate(0,0)");
        $(".piece1").css("transform", "translate(208px,80px)");
      }, 700);
      x = 208;
      y = 80;
      prevx = 44;
      u = 4;
      pos1 = 44;
    }, time);

  } else if (pos1 == 51) {
    time = 1500;
    setTimeout(function() {
      console.log(x);
      console.log(y);
      $(".piece1").removeClass("traclass");
      $(".pieceouter1").css("transform", "translateX(364px)");
      $(".pieceouter1").addClass("ladder51x");
      $(".piece1").css("transform", "translateY(-24px)");
      $(".piece1").addClass("ladder51y");
      setTimeout(function() {
        console.log(x);
        console.log(y);
        $(".pieceouter1").removeClass("ladder51x");
        $(".piece1").removeClass("ladder51y");
        $(".pieceouter1").css("transform", "translate(0,0)");
        $(".piece1").css("transform", "translate(364px,-24px)");
      }, 700);
      x = 364;
      y = -24;
      prevx = 67;
      u = 6;
      pos1 = 67;
    }, time);

  } else if (pos1 == 71) {
    time = 1500;
    setTimeout(function() {
      console.log(x);
      console.log(y);
      $(".piece1").addClass("traclass");
      $(".pieceouter1").addClass("traclass");
      $(".pieceouter1").css("transform", "translateX(520px)");
      $(".piece1").css("transform", "translateY(-180px)");
      setTimeout(function() {
        console.log(x);
        console.log(y);
        $(".pieceouter1").css("transform", "translate(0,0)");
        $(".piece1").css("transform", "translate(520px,-180px)");
      }, 700);
      x = 520;
      y = -180;
      prevx = 91;
      u = 9;
      pos1 = 91;
    }, time);
  } else if (pos1 == 80) {
    time = 900;
    setTimeout(function() {
      console.log(x);
      console.log(y);
      $(".piece1").addClass("traclass");
      $(".pieceouter1").addClass("traclass");
      $(".pieceouter1").css("transform", "translateX(52px)");
      $(".piece1").css("transform", "translateY(-180px)");
      setTimeout(function() {
        console.log(x);
        console.log(y);
        $(".pieceouter1").css("transform", "translate(0,0)");
        $(".piece1").css("transform", "translate(52px,-180px)");
      }, 700);
      x = 52;
      y = -180;
      prevx = 100;
      u = 9;
      pos1 = 100;
    }, time);
  }



  if (pos2 == 1) {
    time = 700;
    setTimeout(function() {
      $(".piece2").removeClass("traclass");
      $(".pieceouter2").css("transform", "translateX(156px)");
      $(".pieceouter2").addClass("ladder1x");
      $(".piece2").css("transform", "translateY(24px)");
      $(".piece2").addClass("ladder1y");
      setTimeout(function() {
        $(".pieceouter2").removeClass("ladder1x");
        $(".piece2").removeClass("ladder1y");
        $(".pieceouter2").css("transform", "translate(0,0)");
        $(".piece2").css("transform", "translate(156px,24px)");
      }, 700);
      p = 156;
      q = 24;
      prevy = 38;
      v = 3;
      pos2 = 38;
    }, time);



  } else if (pos2 == 4) {
    time = 700;
    setTimeout(function() {
      $(".piece2").removeClass("traclass");
      $(".pieceouter2").css("transform", "translateX(364px)");
      $(".pieceouter2").addClass("ladder4x");
      $(".piece2").css("transform", "translateY(128px)");
      $(".piece2").addClass("ladder4y");
      setTimeout(function() {
        $(".pieceouter2").removeClass("ladder4x");
        $(".piece2").removeClass("ladder4y");
        $(".pieceouter2").css("transform", "translate(0,0)");
        $(".piece2").css("transform", "translate(364px,128px)");
      }, 700);
      p = 364;
      q = 128;
      prevy = 14;
      v = 1;
      pos2 = 14;
    }, time);



  } else if (pos2 == 9) {
    time = 900;
    console.log("hello");
    setTimeout(function() {
      $(".piece2").removeClass("traclass");
      $(".pieceouter2").css("transform", "translateX(520px)");
      $(".pieceouter2").addClass("ladder9x");
      $(".piece2").css("transform", "translateY(24px)");
      $(".piece2").addClass("ladder9y");

      setTimeout(function() {
        $(".pieceouter2").removeClass("ladder9x");
        $(".piece2").removeClass("ladder9y");
        $(".pieceouter2").css("transform", "translate(0,0)");
        $(".piece2").css("transform", "translate(520px,24px)");
      }, 700);
      p = 520;
      q = 24;
      prevy = 31;
      v = 3;
      pos2 = 31;
      console.log("hello");
    }, time);


  } else if (pos2 == 21) {
    time = 1500;
    setTimeout(function() {
      console.log(x);
      console.log(y);
      $(".piece2").removeClass("traclass");
      $(".pieceouter2").css("transform", "translateX(104px)");
      $(".pieceouter2").addClass("ladder1x");
      $(".piece2").css("transform", "translateY(-28px)");
      $(".piece2").addClass("ladder1y");
      setTimeout(function() {
        console.log(x);
        console.log(y);
        $(".pieceouter2").removeClass("ladder1x");
        $(".piece2").removeClass("ladder1y");
        $(".pieceouter2").css("transform", "translate(0,0)");
        $(".piece2").css("transform", "translate(104px,-24px)");
      }, 700);
      p = 104;
      q = -24;
      prevy = 42;
      v = 4;
      pos2 = 42;
    }, time);
  } else if (pos2 == 28) {
    time = 800;
    setTimeout(function() {
      $(".piece2").removeClass("traclass");
      $(".pieceouter2").css("transform", "translateX(375px)");
      $(".pieceouter2").addClass("ladder28x1");
      $(".piece2").css("transform", "translateY(-28px)");
      $(".piece2").addClass("ladder28y1");

      setTimeout(function() {
        $(".pieceouter2").removeClass("ladder28x1");
        $(".piece2").removeClass("ladder28y1");
        $(".pieceouter2").css("transform", "translate(0,0)");
        $(".piece2").css("transform", "translate(375px,-28px)");

        $(".pieceouter2").css("transform", "translateX(280px)");
        $(".pieceouter2").addClass("ladder28x");
        $(".piece2").css("transform", "translateY(-184px)");
        $(".piece2").addClass("ladder28y");
        setTimeout(function() {
          $(".pieceouter2").removeClass("ladder28x");
          $(".piece2").removeClass("ladder28y");
          $(".pieceouter2").css("transform", "translate(0,0)");
          $(".piece2").css("transform", "translate(280px,-184px)");

          $(".pieceouter2").css("transform", "translateX(208px)");
          $(".pieceouter2").addClass("ladder28y2");
          $(".piece2").css("transform", "translateY(-232px)");
          $(".piece2").addClass("ladder28x2");
          setTimeout(function() {
            $(".pieceouter2").removeClass("ladder28y2");
            $(".piece2").removeClass("ladder28x2");
            $(".pieceouter2").css("transform", "translate(0,0)");
            $(".piece2").css("transform", "translate(208px,-232px)");

          }, 800);
        }, 900);
      }, 800);
      p = 208;
      q = -232;
      prevy = 84;
      v = 8;
      pos2 = 84;
    }, time);
  } else if (pos2 == 36) {
    if (diceNumber == 6) {
      time = 2200;
    } else {
      time = 800;
    }
    setTimeout(function() {
      console.log(x);
      console.log(y);
      $(".piece2").removeClass("traclass");
      $(".pieceouter2").css("transform", "translateX(208px)");
      $(".pieceouter2").addClass("ladder9y");
      $(".piece2").css("transform", "translateY(-28px)");
      $(".piece2").addClass("ladder9x");
      setTimeout(function() {
        console.log(x);
        console.log(y);
        $(".pieceouter2").removeClass("ladder9y");
        $(".piece2").removeClass("ladder9x");
        $(".pieceouter2").css("transform", "translate(0,0)");
        $(".piece2").css("transform", "translate(208px,-28px)");
      }, 700);
      p = 208;
      q = -28;
      prevy = 44;
      v = 4;
      pos2 = 44;
    }, time);
  } else if (pos2 == 51) {
    time = 1500;
    setTimeout(function() {
      console.log(x);
      console.log(y);
      $(".piece2").removeClass("traclass");
      $(".pieceouter2").css("transform", "translateX(364px)");
      $(".pieceouter2").addClass("ladder51x");
      $(".piece2").css("transform", "translateY(-132px)");
      $(".piece2").addClass("ladder51y");
      setTimeout(function() {
        console.log(x);
        console.log(y);
        $(".pieceouter2").removeClass("ladder51x");
        $(".piece2").removeClass("ladder51y");
        $(".pieceouter2").css("transform", "translate(0,0)");
        $(".piece2").css("transform", "translate(364px,-132px)");
      }, 700);
      p = 364;
      q = -132;
      prevy = 67;
      v = 6;
      pos2 = 67;
    }, time);

  } else if (pos2 == 71) {
    time = 1500;
    setTimeout(function() {
      console.log(x);
      console.log(y);
      $(".piece2").addClass("traclass");
      $(".pieceouter2").addClass("traclass");
      $(".pieceouter2").css("transform", "translateX(520px)");
      $(".piece2").css("transform", "translateY(-288px)");
      setTimeout(function() {
        console.log(x);
        console.log(y);
        $(".pieceouter2").css("transform", "translate(0,0)");
        $(".piece2").css("transform", "translate(520px,-288px)");
      }, 700);
      p = 520;
      q = -288;
      prevy = 91;
      v = 9;
      pos2 = 91;
    }, time);
  } else if (pos2 == 80) {
    time = 900;
    setTimeout(function() {
      console.log(x);
      console.log(y);
      $(".piece2").addClass("traclass");
      $(".pieceouter2").addClass("traclass");
      $(".pieceouter2").css("transform", "translateX(52px)");
      $(".piece2").css("transform", "translateY(-288px)");
      setTimeout(function() {
        console.log(x);
        console.log(y);
        $(".pieceouter2").css("transform", "translate(0,0)");
        $(".piece2").css("transform", "translate(52px,-288px)");
      }, 700);
      p = 52;
      q = -288;
      prevy = 100;
      v = 9;
      pos2 = 100;
    }, time);
  }
}
