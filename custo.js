
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function clickCounter1() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount1) {
      sessionStorage.clickcount1 = Number(sessionStorage.clickcount1)+1;
    } else {
      sessionStorage.clickcount1 = 1;
    }
    document.getElementById("result").innerHTML = "You have Ordered " + sessionStorage.clickcount1 + " rice item(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function clickCounter2() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount2) {
      sessionStorage.clickcount2 = Number(sessionStorage.clickcount2)+1;
    } else {
      sessionStorage.clickcount2 = 1;
    }
    document.getElementById("result").innerHTML = "You have Ordered " + sessionStorage.clickcount2 + " meals.";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
function clickCounter3() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount3) {
      sessionStorage.clickcount3 = Number(sessionStorage.clickcount3)+1;
    } else {
      sessionStorage.clickcount3 = 1;
    }
    document.getElementById("result").innerHTML = "You have Ordered " + sessionStorage.clickcount3 + " chapathi(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
  var count=Number(sessionStorage.clickcount1)+Number(sessionStorage.clickcount2)+Number(sessionStorage.clickcount3);
  document.getElementById("i").innerHTML = "You have Ordered " + count +" items.";
  

}
var c1=document.getElementsByName("input").clickcount1;
var c2=document.getElementsByName("input").clickcount2;
var c3=document.getElementsByName("input").clickcount3;
//receive.addEventListener("click",function (){
	