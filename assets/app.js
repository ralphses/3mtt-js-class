let bodyElement = document.getElementById('body-element');

//Operators


//Arithmetic +, -, *, /, % -- modulus

let firstNumber = 20;
let secondNumber = 30;
let fifthNumber = 30;
let thirdNumber = 5.8;

//Addition operator
let additionResult = firstNumber + secondNumber;
bodyElement.textContent = additionResult;

//Subtraction operator
let subResult = firstNumber - thirdNumber;
bodyElement.textContent = subResult;

//Multiplication
let multiResult = thirdNumber * firstNumber;
bodyElement.textContent = multiResult;

//Division
let divisionResult = secondNumber / firstNumber;
bodyElement.textContent = divisionResult;


//Conditional
let lessThan = firstNumber < secondNumber;
bodyElement.textContent = lessThan;

let greaterThan = firstNumber > secondNumber;
bodyElement.textContent = greaterThan;

let lessThanOrEqual = firstNumber <= secondNumber;
bodyElement.textContent = lessThan;

let greaterThanOrEqual = firstNumber >= secondNumber;
bodyElement.textContent = greaterThanOrEqual;

let equalTo = secondNumber == fifthNumber;
bodyElement.textContent = equalTo;

let notEqual = secondNumber != fifthNumber;
bodyElement.textContent = notEqual;

let notEqualTwo = secondNumber != thirdNumber;
bodyElement.textContent = notEqualTwo;


//Logical 

let firstCondition = secondNumber == fifthNumber;
let secondCondition = fifthNumber > thirdNumber;
let forthCondition = 2 < 1;
let thirdCondition = 0 <= -5;

//Usion operator OR -- ||

let orConditionResult = firstCondition || secondCondition || thirdCondition;
bodyElement.textContent = orConditionResult;

let orConditionResultTwo = forthCondition || thirdCondition;
bodyElement.textContent = orConditionResultTwo;

//Using operator AND -- &&
let andConditionResult = firstCondition && secondCondition && thirdCondition;
bodyElement.textContent = andConditionResult;

let complexCondition = (4 < 5 && 6 <= 7) && 3 > 5
bodyElement.textContent = complexCondition;


//Assignment
//equal operator -- =
//assign and add operator -- =

let numbers = 3;

numbers += 4;

numbers--;
bodyElement.textContent = numbers;

//Tenary