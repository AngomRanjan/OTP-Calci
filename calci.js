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
  return operator (num1,num2);
}

const num1=6;
const num2=0;
console.log(operate(num1,num2,divide));