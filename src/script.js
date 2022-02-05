// This is an in-line comment.//
/* This is a
multi-line comment */



// Declare a variable

var myName;

// Storing values with assignment operator

var a;
a = 7;

// Assigning the values of one variable to another

var a;
a = 7;
var b;
b=a;

// Intializing variables with assignment operator

var a;
a=9;

// Declare string variables

var myFirstName="ashutosh";
var myLastName="mishra";

// Understanding unintialized variables

var a=5;
var b=10;
var c="This is a";

a = a + 1;
b = b + 5;
c = c + " String!";


// Understanding case senstivity in variables

var properCamelCase;
var studlyCapVar;
var titleCaseOver;

titleCaseOver=9000;
studlyCapVar=10;
properCamelCase="A String";


// Explore differences between var and let variable


let catName = "Oliver";
let catSound = "Meow!";

// Declare a read-only varible with const keyword


const FCC = "freeCodeCamp";
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact);

// Add two number with javascript


const sum = 100 + 100;


// Subtract one number from another using javascript

const difference = 150 -100;


// Multiply two number

const multiply = 15 * 15;
console.log(multiply);

// Divide one number with another 

const quotient = 100 / 50;



// Increment the number with javascript

let myVar = 199;
myVar = ++myVar;

// Decrement the number with javascript

let a = 199;
a = --a;

// Create decemial numbers with javascript  

const myDecimal = 7.7;

// Multiply two decimal nymbers

const product = 8 * 9;

// Divide one decimal with another

const quotient = 14.4 / 2.0;

// Finding a remainder in a javascript

const remainder = 11 % 3;

// compound assignment with augmented addition

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9 ;
c +=  7;

// compound assignment with augmented subtraction
 
let x = 3;
let y = 17;
let z = 12;

x -= 12;
y -= 9 ;
z -=  7;

// compound assignment with augmented multiplication


let i = 3;
let j = 17;
let k = 12;

i *= 12;
j *= 9 ;
k *=  7;


// compound assignment with augmented division


let l = 3;
let m = 17;
let n = 12;

l *= 12;
m *= 9 ;
n *=  7;


// escaping literal quotes in strings

const myStr = "Ashutosh is, \"a employee, \"in a company, \" name CEDCOSS, \"."; 

// Quoting string in single quotes

const myStrg = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape sequences in string 

const myStrg1 = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating string with plus operator

const myStrg2 = "This is the start." + " This is the end.";

// Concatenating string with plus equal operator

let myStrg3 = "This is the first sentence. ";
myStrg3 += "This is the second sentence."


// Constructing strings with variables

const myName1 = "Ashutosh" ;
const myStrg4 = "Hello, my name, is " + myName + ", how are you?";


// Appending variables to strings

const someAdjective = "awesome!";
let myStrg5 = "Learning to code from W3School is ";
myStrg5 += someAdjective;

// Find the length of the string

let lastNameLength = 0;
const lastName = "CedCoss";
lastNameLength = lastName.length;

// Use bracket notation to find the first character of a string

let firstLetterOfLastName1 = "";
const lastName1 = "Lovelace";
firstLetterOfLastName1 = lastName1[0];

// Use string immutability

let myStrg6 = "Jello World";
myStrg6 = "Hello World"

// Use bracket notation to find the nth character of a string 

const lastName2 = "Lovelace";

const thirdLetterOfLastName2 = lastName2[2];

// Use bracket notation to find the last character of a string 

const lastName3 = "Lovelace";

const lastLetterOfLastName3 = lastName3[lastName3.length-1];

// Use bracket notation to find the nth-last character of a string

const lastName4 = "Lovelace";
const secondToLastLetterOfLastName4 = lastName4[lastName4.length-2];

// Word Blanks


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myNoun + " " + myVerb + " " + myAdjective + " " + myAdverb;

// Store multiple values in one variable using javascript arrays


const myArray1 = ["peanut butter", 2, "bread"];

// Nest one array with another array


const myArray2 = [["Bulls", 23], ["White Sox", 45]];

// Access array data with indexes

const myArra3 = [50, 60, 70];

const myData = myArray3[0];

// Modify array data with indexes

const myArray4 = [15, 64, 99];
myArray4[0] = 45;

// Access multi-dimensional array with indexes

const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData1 = myArray5[2][1];

// Multiple array with Push()

const myArray6 = [["John", 23], ["cat", 2]];
myArray6.push(["dog", 3]);

// Multiple array with shift()


const myArray7 = [["John", 23], ["dog", 3]];
const removedFromMyArray7 = myArray7.shift();


// Multiple array with pop()


const myArray8 = [["John", 23], ["cat", 2]];
const removedFromMyArray8 = myArray8.pop();

// Manipulate array with unshift()

const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();
myArray9.unshift(["Paul", 35]);


// Shopping list


const myList = [["Chocolate Bar", 15], ["Fanta", 2], ["Sprite", 3], ["Pepsi", 4], ["Lays", 5]];


// With reusable javascripts qith functyions

function reusableFunction(){
    colnsole .log("Hi Ashutosh");
  }


//   Passing values to function with arguements

function functionWithArgs(q, r) {
    console.log(q+r);
  }
  functionWithArgs(1,2);
  functionWithArgs(7,9);


//   Remove a value from a function with return
function timesFive(num) {
    return num * 5;
  }
  
  timesFive(5);
  timesFive(2);
  timesFive(0);


//   globlal scope and functions


let myGlobal=10;

function fun1() {
 
oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


// Local scope and functions

function myLocalScope() {
    
  const myVar = "Ashutosh";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  

  console.log('outside myLocalScope', myVar);

//   Global vs local scope in fuctions

const outerWear = "T-Shirt";

function myOutfit() {
  
  var outerWear = "sweater";
  
  return outerWear;
}

myOutfit();


// understaning undefined value returned by function

let sum = 0;

function addThree() {
  sum = sum + 3;
}
function addFive(){
  sum=sum+5;
}
addThree();
addFive();

// Assignment with a returned value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}


processed=processArg(7);

// Stand in line


function nextInLine(arr, item) {
   
    arr.push(item);
    var temp = arr.shift();
    return temp;
  }
  const testArr = [1, 2, 3, 4, 5];  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));



//   Understanding boolean values


function welcomeToBooleans() {
return true; 
}

// use conditional logic with if statements

function trueOrFalse(wasThatTrue) {
    
  if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false"
  }
   
  
  trueOrFalse(true);
  trueOrFalse(false);



//   comparison with the equality operator
function testEqual(val) {
    if (val==12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);



//   comparison with strict equality operator
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

// Practise comparison different values
function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

//   Comparison with inequality operator



function testNotEqual(val) {
    if (val!=99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);


  //   comparison with strict inequality operator

  function testStrictNotEqual(val) {
    if (val!==17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  //   comparison with greater tham operator
  function testGreaterThan(val) {
    if (val>100) {  
      return "Over 100";
    }
  
    if (val >10) {  
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

  //   comparison with greater or equal than operator

  function testGreaterOrEqual(val) {
    if (val>=20) { 
      return "20 or Over";
    }
  
    if (val>=10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

//   Comparsion with less than operator

function testLessThan(val) {
    if (val<25) { 
      return "Under 25";
    }
  
    if (val<55) { 
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
 //   comparison with less or equal to operator
 function testLessOrEqual(val) {
    if (val<=12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);


//   comparsion with logical and operator

function testLogicalAnd(val) {
    
    if (val>=25 && val<=50) {
    
        return "Yes";
      }
  
    
    return "No";
  }
  
  testLogicalAnd(10);
//   Comparison with logical or operator


function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val>20) {
      return "Outside";
    
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

//   introducing else statement

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }else  {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

//   introduce else if statement
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if(val < 5) {
      return "Smaller than 5";
    } else {
    return "Between 5 and 10";
  }
  }
  testElseIf(7);



