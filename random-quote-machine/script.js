// =====================global functions=======================

function pickColor() {
  let colors = ['#2e93b1', '#dda9b4', '#dab420', '#941414', '#3eb1c8', '#ffcc5c', '#a31616', '#001e3b', '#00cc66', '#ffb399', '#ffbd66'];
  let index = Math.floor(Math.random() * Math.floor(colors.length));
  return colors[index];
};



// =======================jQuery===============================


$(document).ready(() => {
  let curColor = "#2fed71";

  $("#new-quote").click(() => {
    let thisColor = curColor;
    while(thisColor == curColor){
      curColor = pickColor();
    }
    console.log(curColor);
    $("body, .button").animate({
      backgroundColor: curColor
    }, 1000);
    // $("#text").animate({
    //   fontSize: 30
    // }, 1000);
  });

});
