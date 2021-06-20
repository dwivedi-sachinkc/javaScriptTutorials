// LET is a block level keyword that is used to declare a variable in JS.

// When we talk about block leverl varaible it means, it will have blocked cope => {...}


let a; // variable declaration // global scope // value: undefined

console.log(a);


/* ========================================== */


(function(){
  a = 10;
  console.log(a); // 10
})();


/* ========================================== */

(function(){
  let b = 10;
  console.log(b); // 10
})();

// console.log(b); // Reference Error 

/* ========================================== */

(function(){
  // console.log(c); // Reference Error
  let c = 10;
})();


/* ========================================== */

(function(){
  // console.log(d); // Reference Error
  d = 10;
})();


/* ========================================== */

var condition = "tanish";
if(condition === "tanish"){
  let z = 10;
  console.log(z); // 10 (let is a block scope)
}
// console.log(z); // Reference Error


/* ========================================== */

for(var i=0;i<10;i++){ // var i will have gloabl scope
  console.log(i); // 1 2 3 4 5 6 7 8 9
}

console.log(i); // 10

/* ========================================== */
