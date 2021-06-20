
/*
Function: Function is a set of instruction that can be resused at multiple places just by calling it.
 */

/*
KEY POINTS TO REMEMBER:
a) Function in JS is an object.
b) We know that a function is an object and object always store the properties in terms of key value pair. that means we can also assign properties to the function.
*/

// Function is an object
function displayName(){
    console.log("My name is Sachin");
}
console.log(typeof displayName); // type is "function" but is a string 
console.log((function(){}).constructor === Function); // true
  
/*
The Function() constructor expects any number of string arguments. The last argument is the body of the function – it can contain arbitrary JavaScript statements, separated from each other by semicolons.
*/
let funcConstructor = new Function('a','b','c', 'console.log(a); console.log(b); console.log(c)');
funcConstructor(1,2,3);

/*
HOW MANY ATTRIBUTES WILL BE THERE BYDEFAULT FOR A FUNCTION, SINCE IT IS AN OBJECT
*/
let functionAttributes = function(){
return true;
}
// arguments, caller, length, name, prototype, call, bind, apply, constructor, toStrinng, hasOwnProperty, isPrototypeOf

/* ======================================================== */

// FUNCTION STARTS HERE (REAL LIFE IMPLEMENTATION)

// named function
function add(a,b){
return a+b;
}
add(1,2);

// anonymous function OR function expression
let multiply = function(a,b){
return a*b;
}
multiply(2,2);


// IIFE (immediate Invoking Function Expression)
(function(a,b){return a/b;})(10,2);


// High Order Function (A high order function is a function which takes a function as a parameter and returns a function. Eg. map(), filter()...)


// First Class Function (A function which is treated as any other variable Eg. Can be stored in a variable, can be stored inside an object, can be passed as an argument, can be returned from a function. in below example we have firstClassFunction is a first class function which can be stored inside variable)

// 1: Acts as a simple variable
const foo = function() {
    console.log("foobar");
}
// Invoke it using the variable
foo();


// 2: Passing a function in another function as an argument
function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
console.log(helloMessage() + name);
}



// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");

