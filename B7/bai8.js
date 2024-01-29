window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("logo").style.color = "rgb(135, 135, 135)";
    document.getElementById("myTopnav").style.color = "rgb(135, 135, 135)";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.color = "#000";
    document.getElementById("myTopnav").style.color = "#000";
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