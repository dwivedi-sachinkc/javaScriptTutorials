/* CONST: CONST is another way to declare a variable in JS but for constant values (a value that can never change during the execution of entire program). We can not override the value of the constant variable during the execution of the program */

const PI = 3.14;

console.log(PI); // 3.14



// PI = 3.1444; // TypeError: Assignment to costant variable

// console.log(PI);


const NUM = [1,2,3,4,5];
console.log(NUM);
NUM.push(6);
console.log(NUM); // 6 will be added to the existing array

// NUM = [1,2,3,4,5,6,7]; // TypeError: Asssignment to constant variable
// console.log(NUM)


// const NAME // Syntax Error: Missing intializer in const declaration
// NAME = "Tanish";
// console.log(NAME);



const AGE = 12;
// var AGE = 12; // SyntaxError: Identifier 'AGE' has already been declared
console.log(AGE);


const SALARY = 23000;
console.log(SALARY); // 23000
// console.log(window.SALARY); // ReferenceError: window is not defined


// var address = "123 Gaighat";
// console.log(address); // 123 Gaighat
// console.log(window.address); // 123 Gaighat


// let address2 = "123 Gaighat";
// console.log(address2); // 123 Gaighat
// console.log(window.address2); // undefined


// const address3 = "123 Gaighat";
// console.log(address3); // 123 Gaighat
// console.log(window.address3); // undefined


const RESULT = "I am outside";
console.log(RESULT)

const ADDRESS3 = "123 Gaighat";

if(ADDRESS3 === "123 Gaighat"){
  const RESULT = true;
  console.log(RESULT); // true
}

// console.log(RESULT); // ReferenceError: RESULT is not defined








/*
KEY POINT TO REMEMBER:

a) const variable should be declared with UPPERCASE letters.

b) If you store a reference type value in a const variable then you can always modify the value of that reference type. But we can not assign a value directly to the const once it is assigned.

c) Assignment is not possible once the const variable has been declared/defined.

d) If you are declaring a variable using const keyword, and assigning a value later, will throw an error since a const variable must be defined with a value while declaration

e) CONST is always block scoped and should be declared and defined at the same time.

f) LET/CONST block scoped variables will not be assigned to window/global object. Var will always be available to window object.
 */