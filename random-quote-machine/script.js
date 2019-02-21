// =====================global variables=======================
let curColor = '';
let curQuote = {quote: "", author: ""};
// =====================global functions=======================

function pickColor() {
  let colors = ['#2fed71', '#2e93b1', '#dda9b4', '#dab420', '#941414', '#3eb1c8', '#ffcc5c', '#a31616', '#001e3b', '#00cc66', '#ffb399', '#ffbd66'];
  let index = Math.floor(Math.random() * Math.floor(colors.length));
  return colors[index];
};

function getQuotes() {
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  .then((response) => response.json())
  .then((json) => {
    let newQuote = pickQuote(json.quotes);
    // console.log("curQuote: " + curQuote.quote);
    while(newQuote.quote === curQuote.quote){
      newQuote = pickQuote(json.quotes);
    }
    // console.log(newQuote);
    if(curQuote.quote == ""){
      document.getElementById('text').innerHTML = `<span>${newQuote.quote}</span>`;
      document.getElementById('author').innerHTML = `<p>- ${newQuote.author}</p>`;
    }else{
      renderQuote(newQuote);
    }
    curQuote = Object.assign(curQuote, newQuote);

  });

}

function pickQuote(quotes) {
  let index = Math.floor(Math.random() * Math.floor(quotes.length));
  // console.log("new quote:" + quotes[index]);
  return quotes[index];
}

function renderQuote(newQuote) {
  // console.log(newQuote);
  $("#text").fadeOut(500, () => {
    document.getElementById('text').innerHTML = `<span>${newQuote.quote}</span>`;
    $("#text").css("color", curColor);
  });
  $("#author").fadeOut(500, () => {
    document.getElementById('author').innerHTML = `<p>- ${newQuote.author}</p>`;
    $("#author").css("color", curColor);
  });
  $(".quotemark").fadeOut(500, () => {
    $(".quotemark").css("color", curColor);
  });

  $("#text").fadeIn(500);
  $("#author").fadeIn(500);
  $(".quotemark").fadeIn(500);
}

// =======================Main=================================

getQuotes();

//jQuery
$(document).ready(() => {
  curColor = "#2fed71";

  $("#new-quote").click(() => {
    getQuotes();
    let thisColor = curColor;
    while(thisColor === curColor){
      curColor = pickColor();
    }
    // console.log(curColor);
    $("body, .button").animate({
      backgroundColor: curColor
    }, 1000);

  });

  $("#tweet-quote").click(() => {
    window.open(`https://twitter.com/intent/tweet?text=\"${curQuote.quote}\" - ${curQuote.author}`);
  });
});
