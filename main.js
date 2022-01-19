// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numberToString = (myNumber) => {
  const stringInt = myNumber.toString();
  return stringInt;
}
const convertedNumber = numberToString(23);
console.log(convertedNumber);

// Write a JavaScript program to convert a string to the number.

const stringToNumber = (myString) => {
  const numInt = parseInt(myString);
  return numInt;
}

const convertedString = stringToNumber(33);
console.log(convertedString);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const printDataType = (data) => {
  const dataType = typeof(data);
  return dataType;
}

const myBoolean = printDataType(true);
console.log(myBoolean);
  
// Write a JavaScript program that adds 2 numbers together.

const addNumbers = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
}

const numSum = addNumbers(5, 5)
console.log(numSum);

// Write a JavaScript program that runs only when 2 things are true.

const doubleTrue = (input) => {
  if (input > 10 && input < 50) {
    return "Two Things are True!";
  } else {
    return "Something is False!";
  }
}

const isDoubleTrue = doubleTrue(25);
console.log(isDoubleTrue);

// Write a JavaScript program that runs when 1 of 2 things are true.

const singleTrue = (input) => {
  if (input > 20 || input === 10) {
    return "One thing is true!"
  } else {
    return "Neither is true!"
  }
}

const isSingleTrue = singleTrue(10);
console.log(isSingleTrue);

// Write a JavaScript program that runs when both things are not true.  

const doubleFalse = (input) => {
  if (input !== 25 && input !== 35) {
    return "Neither is true!"
  } else {
    return "Something is true!"
  }
}

const isDoubleFalse = doubleFalse(10);
console.log(isDoubleFalse);

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
