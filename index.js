var diceMove = 0;
var diceRolled1 = 0;
var diceRolled2 = 0;
var x = 0;
var y = 0;
var p = 0;
var q = 0;
var u = 0;
var v = 0;
var prevy = 0;
var diceNumber = 0;
var prev;
var f = 0;
var g = 0;
var prevx = 0;
$(".dice").click(function() {
  prev = diceNumber;
  diceNumber = Math.floor(Math.random() * 6 + 1);
//   if(g==0){
//       diceNumber=6;
//       g=1;
//   }
//   else if(g==1){
//     diceNumber=4;
//     g=2;
//   }
//   else if(g==2){
//     diceNumber=6;
//     g=3;
//   }
//   else if(g==3){
//     diceNumber=4;
//     g=4;
//   }
//   else if(g==4){
//     diceNumber=2;
// g=5;
//   }
//   else if(g==5){
//     diceNumber=6;
//     g=6;
//   }
//   else if(g==6){
//     diceNumber=6;
//     g=7;
//   }
//   else if (g==7){
//     diceNumber=5;
//   }
  var animation = "animation" + diceNumber;

  $(".dice").addClass("animations");

  setTimeout(function() {
    $(".dice").removeClass("animations");

    $(".dice").addClass(animation);
    console.log(diceMove);
    setTimeout(function() {
      $(".dice").removeClass(animation);
      console.log(diceMove);
      if (diceNumber !== 6 && diceMove === 0) {
        $(".dice").addClass("dice1");
        $(".side").addClass("side1");
        console.log(diceMove);
        diceMove = 1;
        console.log(diceMove);

      } else if (diceNumber !== 6 && diceMove === 1) {
        $(".dice").removeClass("dice1");
        $(".side").removeClass("side1");
        console.log(diceMove);
        diceMove = 0;
        console.log(diceMove);
      }

    }, 800);

  }, 400);

  ladders();

  console.log(diceMove);

  if (diceMove === 0) {
    console.log(x);
    console.log(y);
    if (diceNumber === 6 && diceRolled1 === 0) {
      $(".piece1").css("transform", "translate(-10px, 288px)");
      $(".piece1").addClass("traclass");
      diceRolled1 = 1;

    } else if (diceRolled1 === 1) {
      y = 288 - u * 52;
      if (u % 2 == 0) {
        x = x + 52 * diceNumber;

      } else {
        x = x - 52 * diceNumber;
      }

      console.log(x);
      console.log(y);
      if (x >= 0 && x <= 520 && u % 2 == 0) {
        $(".piece1").css("transform", "translate(" + x + "px," + y + "px )");
        $(".piece1").addClass("traclass");
        prevx += diceNumber;
      } else if (x > 0 && x <= 520 && u % 2 != 0) {

        x = 520 - 52 * (diceNumber + (prevx % (10 * u)) - 1);


        $(".piece1").css("transform", "translate(" + x + "px," + y + "px )");
        prevx += diceNumber;

      } else if (x >= 520) {

        x = 520 - 52 * (diceNumber - ((u + 1) * 10 + 1 - prevx));
        y = 288 - 52 * (u + 1);
        $(".piece1").css("transform", "translate(520px," + (y + 52) + "px)");
        $(".piece1").addClass("traclass");
        setTimeout(function() {
          $(".piece1").css("transform", "translate(520px," + y + "px)");
          setTimeout(function() {
            $(".piece1").css("transform", "translate(" + x + "px, " + y + "px)");
          }, 800);
        }, 800);


        u++;
        prevx += diceNumber;
      } else if (x <= 0) {


        u++;
        x = 52 + 52 * (diceNumber - (u * 10 + 1 - prevx));
        y = 288 - 52 * u;
        $(".piece1").css("transform", "translate(52px, " + (y + 52) + "px)");
        $(".piece1").addClass("traclass");
        setTimeout(function() {
          $(".piece1").css("transform", "translate(52px, " + y + "px)");
          setTimeout(function() {
            $(".piece1").css("transform", "translate(" + x + "px, " + y + "px)");
          }, 800);
        }, 800);

        prevx += diceNumber;

      }
    }

  } else {
    console.log(p);
    console.log(q);
    if (diceNumber === 6 && diceRolled2 === 0) {
      $(".piece2").css("transform", "translate(-10px, 180px)");
      $(".piece2").addClass("traclass");
      diceRolled2 = 1;

    } else if (diceRolled2 === 1) {

      q = 180 - v * 52;
      if (v % 2 == 0) {
        p = p + 52 * diceNumber;

      } else {
        p = p - 52 * diceNumber;
      }
      console.log(p);
      console.log(q);

      if (p >= 0 && p <= 520 && v % 2 == 0) {
        $(".piece2").css("transform", "translate(" + p + "px," + q + "px )");
        $(".piece2").addClass("traclass");
        prevy += diceNumber;
      } else if (p > 0 && p <= 520 && v % 2 != 0) {

        p = 520 - 52 * (diceNumber + (prevy % (10 * v)) - 1);


        $(".piece2").css("transform", "translate(" + p + "px," + q + "px )");
        prevy += diceNumber;

      } else if (p >= 520) {

        p = 520 - 52 * (diceNumber - ((v + 1) * 10 + 1 - prevy));
        q = 180 - 52 * (v + 1);
        $(".piece2").css("transform", "translate(520px," + (q + 52) + "px)");
        $(".piece2").addClass("traclass");
        setTimeout(function() {
          $(".piece2").css("transform", "translate(520px," + q + "px)");
          setTimeout(function() {
            $(".piece2").css("transform", "translate(" + p + "px, " + q + "px)");
          }, 800);
        }, 800);
        v++;
        prevy += diceNumber;
      } else if (p <= 0) {

        v++;
        p = 52 + 52 * (diceNumber - (v * 10 + 1 - prevy));
        q = 180 - 52 * v;
        $(".piece2").css("transform", "translate(52px, " + (q + 52) + "px)");
        $(".piece2").addClass("traclass");
        setTimeout(function() {
          $(".piece2").css("transform", "translate(52px, " + q + "px)");
          setTimeout(function() {
            $(".piece2").css("transform", "translate(" + p + "px, " + q + "px)");
          }, 800);
        }, 800);

        prevy += diceNumber;

      }
    }
  }

  if (diceRolled1 === 1 && diceRolled2 === 1) {
    cross();
  }

});

function cross() {
  console.log(diceMove);
  console.log(x);
  console.log(y);
  console.log(p);
  console.log(q);
  if (prevx === prevy && diceMove === 0) {
    setTimeout(function(){
      $(".piece2").css("transform", "translate(0,0)");
    },600);
    diceRolled2 = 0;
    p=0;
    q=0;
    v=0;
    if(diceNumber!=6){
      diceMove = 1;
    }
    else{
      diceMove = 0;
    }
    prevy = 0;
  } else if (prevx === prevy && diceMove === 1) {
    setTimeout(function(){
      $(".piece1").css("transform", "translate(0,0)");

    },600);
    x=0;
    y=0;
    u=0;
    diceRolled1 = 0;
    if(diceNumber!=6){
      diceMove = 0;
    }
    else{
      diceMove = 1;
    }
    prevx = 0;
  }

  console.log(x);
  console.log(y);
  console.log(p);
  console.log(q);
}



function ladders() {

}
