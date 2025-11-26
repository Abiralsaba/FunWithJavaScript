
let sum1=0;
let sum2=0;
let box1= document.getElementById("box1");
let box2= document.getElementById("box2");
let showel=document.getElementById("sh");
let Liverpool=document.getElementById("Liverpool");
let Arsenal=document.getElementById("Arsenal");

function save(){

   let htmlContent = showel.innerHTML+ Liverpool.textContent +" "+ sum1 + " - " + sum2 + " " + Arsenal.textContent + "<br>";
   showel.innerHTML = htmlContent;
   sum1=0;
    sum2=0;
    box1.textContent = sum1;
    box2.textContent = sum2;
}

function add(point) {
     sum1 = sum1 + point
     box1.textContent = sum1
  
   

}

function addd(point) {
     sum2 = sum2 + point
     box2.textContent = sum2
   
}

