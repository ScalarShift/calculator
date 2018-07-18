let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => (b == 0)? "DIV BY ZERO" : a / b;

function operate(a, operator, b){
  switch(operator){
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "INVALID OPERATOR";
  }
}

let displayBox = document.getElementById("displayBox").querySelector("input");
let oneToNineBtns = document.getElementById("oneToNine").querySelectorAll("button");
let zero = document.getElementById("zero").querySelector("button");
let operatorBtns = document.getElementById("operators").querySelectorAll("button");
let clearBtn = document.getElementById("clearBtn").querySelector("button");
let equalsBtn = document.getElementById("equals").querySelector("button");
let displayString = "";

function updateDisplayBox(displayString){
  displayBox.value = displayString;
  console.log(displayString);
}

function buttonDisplayEvent(button){
  button.addEventListener("click", e => {
    displayString = displayString + e.target.textContent; 
    updateDisplayBox(displayString)});
}

function processDisplayString(){
  let processingStack = displayString.split(/(\D)/g);
  while(processingStack.length >= 3){
    processingStack[0] = operate(parseInt(processingStack[0]), processingStack[1], parseInt(processingStack[2]));
    processingStack.splice(1,2);
    console.log(processingStack);
  }
  console.log(processingStack);
  displayString = processingStack[0];
  updateDisplayBox(displayString);
}

for(let i = 0;i < oneToNineBtns.length;i++){
  buttonDisplayEvent(oneToNineBtns[i]);
}
for(let i = 0;i < operatorBtns.length;i++){
  buttonDisplayEvent(operatorBtns[i]);
}
buttonDisplayEvent(zero);

clearBtn.addEventListener("click", e => {
  displayString = "";
  updateDisplayBox(displayString);
});

equalsBtn.addEventListener("click", () => processDisplayString())
