function myFunction() {
  var x = document.getElementById("menu1");
  if (x.className == "menu") {
      x.className += " responsive";
  } else {
      x.className = "menu";
  }
}
function baitap(baiId) {
  var hopbaitap = document.getElementById("hopbaitap");
  hopbaitap.style.display = "flex";
  var ndbaitap = document.getElementsByClassName("ndbaitap");
  for (var i = 0; i < ndbaitap.length; i++) {
    ndbaitap[i].style.display = "none";
  }
  var selectedDetail = document.getElementById("bai" + baiId);
  selectedDetail.style.display = "block";
}
function anbaitap() {
  var hopbaitap = document.getElementById("hopbaitap");
  hopbaitap.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function(){
  console.log("Đã load xong");
  window.addEventListener("scroll",function(){
      console.log("đang cuộn chuột");
      console.log(window.pageYOffset);
      if(window.pageYOffset>500){
          console.log("đến phần sidebar");
      }
  })
})
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("logo").style.color = "#485D35";
  } else {
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.color = "rgb(255, 255, 255)";
  }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}