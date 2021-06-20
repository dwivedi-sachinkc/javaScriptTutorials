// 'a' variable will have global scope

var a; // declaration

a = 10; // definition

(function(){
  console.log(a); // 10 (global)
})();

console.log(a); // 10 (global)






/* ======================================= */

// 'b' variable will have global scope
// var b; // default value: undefined

(function(){
  b = 20;
  console.log(b); // 20 (global variable)
})();

console.log(b); // 20 (global variable)




/* ======================================= */

// 'c' variable will have global scope

(function(){
  var c = 20;
  console.log(c); // 20 (local variable)
})();

console.log(c); // Reference Error

/*
KEY POINTS:

1) By default all the declared variable will have a default value as 'undefined'

2) If you are defining a variable (without declaring it) inside a function, it will have gloabl scope and will act as a global variable.

3) If a variable declared inside a function, it will become a local variable for that function and will not be accessible outside of that method.

 */