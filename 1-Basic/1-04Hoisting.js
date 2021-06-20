// Hositing: All the variable decalaration will on th etop of their respective scope. That means, for all the variable declared/ defined in global scope, will have all its decalaration on the top of global scope. and the same thing for functional scope.

function displayNumber(){
    console.log(a); // undefined
    var a = 10; // global scope
  }
  
  displayNumber();
  
  
  /*
  KEY POINT TO REMEMBER
  
  a) onl decalaration of variable will be hoisted.
  
  a) if a variable has been declared inside a function with var keywork, then that variable will always have local scope of that function
  
  b) if a variable has been defined inside a function without var keyword then that variable will always have glbal scope.
  
  c) Lexing will happen just before the execution of the line of code.
  
   */