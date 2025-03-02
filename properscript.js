function qsFunction(){array = document.querySelectorAll("img");
                      
for (i = 0; i < array.length; i++){array[i].setAttribute("tabindex","0")

 }
}

function upDate(x){
  
 document.getElementById("image").innerHTML = x.alt;
  
 let source_part = "https://f563e4fc-bdd9-458b-a7e7-c03664ae90b1-00-2rn0ybdf518bn.janeway.replit.dev/";
  
 console.log(x.src);
  
 if (x.src === source_part + "bananagrams_maybe.jpg"){document.getElementById("image").style.color = "#ca3545"};
 if (x.src === source_part + "chill.jpg"){document.getElementById("image").style.color = "#ca3545"};
 if (x.src === source_part + "dollars.jpg"){};
 if (x.src === source_part + "images/dolphin.jpg"){document.getElementById("image").style.color = "#ca3545"};
 if (x.src === source_part + "images/h2o.jpg"){};
 if (x.src === source_part + "images/idk.jpg"){document.getElementById("image").style.color = "#ca3545"};
  
 document.getElementById("image").style.backgroundImage = "url('"+x.src+"')";

}

function unDo(){
  
document.getElementById("image").innerHTML = "Hover over an image below to display here.";
document.getElementById("image").style.backgroundImage = "url('')";
document.getElementById("image").style.color = "#000000";
  
}
