
let count = 0

function increment() {

    let countel = document.getElementById("count")
    count += 1
    countel.innerText = count

    console.log("the button is clicked");
}

let welcomeel = document.getElementById("welcome")
let hi = "Hello World!"
welcomeel.innerText = hi


function purchase() {
    alert("Purchase Successful!")
    let errorel = document.getElementById("error")
errorel.innerText = "Something went wrong, please try again"
}


let num1el=8
let num2el=12
document.getElementById("num1").textContent=num1el
document.getElementById("num2").textContent=num2el

function add() {
    let sum = num1el + num2el
    document.getElementById("sum").textContent="the sum is"+" "+sum

   alert("The sum is " + sum)
}
function sub() {
    let sum = num1el - num2el
    document.getElementById("sum").textContent="the SUB is"+" "+sum

   alert("The SUB is " + sum)
}