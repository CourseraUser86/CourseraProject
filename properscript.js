function upDate(x){
var y = x.alt;
var z = x.src;
document.getElementById("image").innerHTML = y;
document.getElementById("image").style.backgroundImage = "url('"+z+"')";}

function unDo(){
document.getElementById("image").innerHTML = "Hover over an image below to display here.";
document.getElementById("image").style.backgroundImage = "url('')";
}