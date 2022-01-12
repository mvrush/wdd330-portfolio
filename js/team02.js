function displayText() {
    let textHTML = document.getElementById("textEntry").value;
    document.getElementById("textDisplay").innerHTML = textHTML; // to show something to the user you use a section and the special word 'innerHTML'.
}

function sumNumber() {
    let inputNum = parseFloat(document.getElementById("numberEntry").value); // you have to use parseFloat() or parseInt() to change the number from a string to a number or the + sign will just concatenate instead of add
    let sum = 0;
    for ( i = 1; i <= inputNum; i += 1) {
        sum += i;
        // console.log(i); // used for testing purposes
    }
    document.getElementById("sumDisplay").innerHTML=`The sum of integers up to ${inputNum} is:${sum}`; // I used backticks ` to create a template string. I then output the variables using this format ${variable}
}

function addNumbers() {
    let inputNum1 = parseFloat(document.getElementById("inputNum1").value); // you have to use parseFloat() or parseInt() to change the number from a string to a number or the + sign will just concatenate instead of add
    let inputNum2 = parseFloat(document.getElementById("inputNum2").value);
    let total = inputNum1 + inputNum2; // this will add instead of concatenate because we used parseFloat() to change the input string to an integer.
    // console.log(total); // used for testing purposes
    document.getElementById("totalDisplay").innerHTML=`The sum of your two integers is: ${total}`; // I used backticks ` to create a template string. I then output the variables using this format ${variable}
}