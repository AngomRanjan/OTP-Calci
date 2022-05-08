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
  display.textContent= operator (num1,num2);
}

function populate(num,s) {
  (Number(display.textContent)===0) ? display.textContent=num:display.textContent=display.textContent + num;
}

const n1=6;
const n2=0;
const display=document.getElementById('display');

document.getElementById('multiply').addEventListener('click', function(){operate(n1,n2,multiply);});
document.getElementById('divide').addEventListener('click', function(){operate(n1,n2,divide);});
document.getElementById('add').addEventListener('click', function(){operate(n1,n2,add);});
document.getElementById('subtract').addEventListener('click', function(){operate(n1,n2,subtract);});

let tempArray = document.querySelectorAll(".numKeys");

tempArray.forEach(function(numKeys) {
  var a=this.id;
    numKeys.addEventListener("click", function() {
        populate(numKeys.id,0)
    });
});
