var diceMove = 0;
var diceRolled1 = 0;
var diceRolled2 = 0;
var x = 0;
var y = 0;
var u = 0;
var diceNumber = 0;
var prev;
var prevx=0;
$(".dice").click(function() {
  prev = diceNumber;
  diceNumber = Math.floor((Math.random() * 6) + 1);

  var animation = "animation" + diceNumber;

  $(".dice").addClass("animations");

  setTimeout(function() {
    $(".dice").removeClass("animations");

    $(".dice").addClass(animation);
    setTimeout(function() {
      $(".dice").removeClass(animation);
      if (diceNumber !== 6 && diceMove === 0) {
        $(".dice").addClass("dice1");
        $(".side").addClass("side1");
        console.log(diceMove);
        diceMove = 1;
        console.log(diceMove);

      } else if (diceNumber !== 6 && diceMove === 1) {
        $(".dice").removeClass("dice1");
        $(".side").removeClass("side1");
        diceMove = 0;
      }
    }, 800);

  }, 400);
  console.log(diceMove);


  if (diceMove === 0) {
    if (diceNumber === 6 && diceRolled1 === 0) {
      $(".piece1").css("transform", "translate(-10px, 288px)");
      $(".piece1").toggleClass("traclass");
      diceRolled1 = 1;
    }
     else if (diceRolled1 === 1) {
      console.log(u);
      console.log(x);
      console.log(y);
      y = 288-u*52;
      if(u%2==0){
        x = x + 52 * diceNumber;

      }
      if(x>=0&&x<=520&&u%2==0)
      {
          $(".piece1").css("transform", "translate(" + x + "px," + y + "px )");
          $(".piece1").addClass("traclass");
          prevx+=diceNumber;
      }
      else if(x>0&&x<=520&&u%2!=0){
        console.log(x);
        console.log(y);
        console.log(diceNumber);
        console.log(prevx);
        x=520-52*(diceNumber+(prevx%10)-1);
        console.log(x);
        console.log(y);

        $(".piece1").css("transform", "translate(" + x + "px," + y + "px )");
          prevx+=diceNumber;
          console.log(prevx);
      }
      else if(x>=520)
      {
        console.log(x);
        console.log(y);
        // x = 520- 52*(x/52 -11);
        //  y=288-52;
        console.log(diceNumber);
        console.log(prevx);
        x = 520 - 52*(diceNumber-(11-prevx));

        $(".piece1").css("transform", "translate(520px, 288px)");
        $(".piece1").addClass("traclass");
        setTimeout(function(){
            $(".piece1").css("transform", "translate(520px, 236px)");
            setTimeout(function(){
                $(".piece1").css("transform", "translate("+x+"px, 236px)");
            },800);
        },800);


         console.log(x);
         console.log(y);
         // for(var i=diceNumber; i>0;i--){
         //   for(var j=0;j<i-1;j++){
         //
         //     $(".piece1").css("transform", "translate(" + x + "px," + y + "px )");
         //     $(".piece1").addClass("traclass");
         //   }
 u++;
 prevx+=diceNumber;
         }


      }
      console.log(prevx);
    }


  else {
    if (diceNumber === 6 && diceRolled2 === 0) {
      $(".piece2").css("transform", "translate(-10px, 180px)");
      $(".piece2").toggleClass("traclass");
      diceRolled2 = 1;
    }
  }

});
