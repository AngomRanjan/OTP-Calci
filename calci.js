function add(num1,num2) {
  return num1+num2
}

function subtract(num1,num2) {
  return num1-num2
}

function divide(num1,num2) {
  var x;
  (num2===0) ? x="error": x=num1/num2;
  return x;
}

function multiply(num1,num2) {
  return num1*num2;
}

function operate(num1,num2,operator){
  alert("you click"+" '"+operator.name+"'");
  display.textContent= operator (num1,num2);
}

function populate(num,s) {
  (Number(display.textContent)===0) ? display.textContent=num:display.textContent=display.textContent + num;
}

const n1=6;
const n2=2;
const display=document.getElementById('display');

let tempArray = document.querySelectorAll("button");

tempArray.forEach(function(numKeys) {
    numKeys.addEventListener("click", function() {
        (numKeys.className==="numKeys") ? populate(numKeys.id,0):operate(n1,n2,window[numKeys.id]);
    });
});
