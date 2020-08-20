// if there is no number in input, screen is alerted that both inputs need to have an accurate number
//else add the numbers and display them in the results span

// interacting with the DOM (Document Object Model) -- methods that allow you to work with built in methods (connects JS and HTML)


function add () {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  if ((num1 === "") || (num2 === "")){
    alert('you need two numbers')
  }else{
    let results = Number(num1) + Number(num2)
    document.getElementById('answer').innerHTML = results;
  }
}

function subtract () {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  if ((num1 === "") || (num2 === "")){
    alert('you need two numbers')
  }else{
    let results = Number(num1) - Number(num2)
    document.getElementById('answer').innerHTML = results;
  }
}

function multiply () {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  if ((num1 === "") || (num2 === "")){
    alert('you need two numbers')
  }else{
    let results = Number(num1) * Number(num2)
    document.getElementById('answer').innerHTML = results;
  }
}

function divide () {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  if ((num1 === "") || (num2 === "")){
    alert('you need two numbers')
  }else{
    let results = Number(num1) / Number(num2)
    document.getElementById('answer').innerHTML = results;
  }
}

const addButton = document.getElementById('addition');
addButton.addEventListener('click', add)

const subtractionButton = document.getElementById('subtraction');
subtractionButton.addEventListener('click', subtract)

const multiplicationButton = document.getElementById('multiplication');
multiplicationButton.addEventListener('click', multiply)

const divisionButton = document.getElementById('division');
divisionButton.addEventListener('click', divide)
