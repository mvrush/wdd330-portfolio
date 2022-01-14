function displayText() {
    let textHTML = document.getElementById("textEntry").value;
    document.getElementById("textDisplay").innerHTML = textHTML;
}

function sumNumber(num) {
    let inputNum= parseFloat(num);
    let sum = 0;
    for ( i = 1; i <= inputNum; i += 1) {
        sum += i;
    }
    document.getElementById("sumDisplay").innerHTML = `The sum of integers up to ${inputNum} is: ${sum}`;
}

function addNumbers(num1, num2) {
    let inputNum1 = parseFloat(num1);
    let inputNum2 = parseFloat(num2);
    let total = inputNum1 + inputNum2;
    document.getElementById("sumDisplay").innerHTML = `The total of your two integers is: ${total}`;
}

// Stretch Goal
function getNum(numId) {
    const number = document.getElementById(numId).value;
    const numberFloat = parseFloat(number);
    if (numberFloat !== NaN) {
        return numberFloat;
    } else return 0;
}
function updateTotal(value) {
    const outputElement = document.getElementById('stretchOutput');
    outputElement.innerHTML = 'Total: ' + value;
  }
  // function declaration
  function add2(num1, num2) {
    return num1 + num2;
  }
  // function expression
  const sub2 = function(num1, num2) {
    return num1 - num2;
  };
  // arrow function
  const mult2 = (num1, num2) => num1 * num2;

  // example of using a callback to pull it all together
  function performOperation(operation) {
    // the argument 'operation' is a function...so when we are ready we can call that function in our code below
    const total = operation(
      getNum('stretchNum1'),
      getNum('stretchNum2')
    );
    updateTotal(total);
  }