function qsFunction(){array = document.querySelectorAll("img");
                      
for (i = 0; i < array.length; i++){array[i].setAttribute("tabindex","0")

 }
}

function upDate(x){
  
 document.getElementById("image").innerHTML = x.alt;
  
 let source_part = "https://courserauser86.github.io/CourseraProject/";
  
 console.log(x.src);
  
 if (x.src === source_part + "bananagrams_maybe.jpg"){document.getElementById("image").style.color = "#ca3545"};
 if (x.src === source_part + "chill.jpg"){document.getElementById("image").style.color = "#ca3545"};
 if (x.src === source_part + "dollars.jpg"){};
 if (x.src === source_part + "dolphin.jpg"){document.getElementById("image").style.color = "#ca3545"};
 if (x.src === source_part + "h2o.jpg"){};
 if (x.src === source_part + "idk.jpg"){document.getElementById("image").style.color = "#ca3545"};
  
 document.getElementById("image").style.backgroundImage = "url('"+x.src+"')";

}

function unDo(){
  
document.getElementById("image").innerHTML = "Hover over an image below to display here.";
document.getElementById("image").style.backgroundImage = "url('')";
document.getElementById("image").style.color = "#000000";
  
}
