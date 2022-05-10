function add(num1,num2) {
  return num1+num2
}

function subtract(num1,num2) {
  return num1-num2
}

function divide(num1,num2) {
  var x;
  (num2===0) ? x="error division by 0": x=num1/num2;
  return x;
}

function multiply(num1,num2) {
  return num1*num2;
}

function percent(text) {
  return Number(text)*0.01;
}

function clear() {
  display.textContent='0';
  curOps='';
  n1='';
  n2='';
  keyMode='number1';
  boolDecimal=false;
}

function backspace(text){
  (text.length===1) ? display.textContent='0':display.textContent=text.substring(0,text.length-1);
  (display.textContent.indexOf('.')<1) ? boolDecimal=false:boolDecimal=true;
}

function operate(num1,num2,operator){

  switch (operator) {
    case 'clear':
      clear();
      break;

    case 'backspace':
      backspace(display.textContent)
      break;

    case 'percent':
      display.textContent=percent(display.textContent)
      break;
    case 'close':
      close();
      break;

    default:
      if(keyMode==="number1") {
        n1=Number(display.textContent);
      }
      else if (keyMode==="number2") {
        n2=Number(display.textContent);
        n1= window[curOps] (n1,n2);
        display.textContent=n1;
        n2="";
      }
      curOps=operator;
      boolDecimal=false;
      (operator==='equal') ? keyMode='number1':keyMode='ops';

  }
}

function populate(num) {
  if (curOps==='equal') {
    display.textContent='0';
    curOps='';
  }
  if (keyMode==='ops') {
    boolDecimal=false;
    keyMode='number2';
    display.textContent=0;
  }
  if (num==='.') {
    (boolDecimal) ? display.textContent=display.textContent: display.textContent+=num;
    boolDecimal=true;
  }
  else 
    (Number(display.textContent)===0 && boolDecimal===false) ? display.textContent=num:display.textContent+=num;
}

let n1=0;
let n2=2;
const display=document.getElementById('display');
let boolDecimal=false;
let keyMode='number1';
let curOps=''

let tempArray = document.querySelectorAll("button");

tempArray.forEach(function(numKeys) {
    numKeys.addEventListener("click", function() {
        (numKeys.className==="numKeys") ? populate(numKeys.id,0):operate(n1,n2,numKeys.id);
    });
});
