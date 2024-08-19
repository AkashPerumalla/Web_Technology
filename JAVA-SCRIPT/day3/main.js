"use strict"

//-->'use strict'  or "use strict"

// console.log("start");

// // Start

// // scope

// //1.Global

// var a=10;
// console.log(a);

// //2.Script/Local
// let b=20;
// console.log(b);

// const c=30;
// console.log(c);

// // 3.Block
// {
//     var m=10;
//     console.log(m);

//     let n=20;
//     console.log(n);

//     const o=30;
//     console.log(o);
// }

/*Difference between var let & const

1.scope
var a=10;

console.log(a);
console.log(window);

let b=20;
console.log(b);

const c=30;
console.log(c);

console.log(window);

2.declaration
var a;
console.log(a);

let d;
console.log(d);

// const e;
// console.log(e);

3.declaration and initialization


var a1=10;
console.log(a1);

let b1=20;
console.log(b1);

const c1=30;
console.log(c1);

4.Reinitialization
var a2=10;
a2="hello";
console.log(a2);

let b2=20;
b2="webtech";
console.log(b2);

const c2=30;
// c2="js";connot be reinitialized
console.log(c2);

// 5.redeclaration and reinitialization


var a2=1;
// a2="hello";------can be redeclared &reinitialized-------/
console.log(a2);

// let b2=20;
let b2=2;
// b2="webtech";cannot be redeclared &reinitialized
console.log(b2);

// const c2=30;
const c2=3;

// c2="js";cannot be redeclared &reinitialized
console.log(c2);


6.hoisting
*/

console.log(a);
var a=10;

// console.log(b);
// let b=20;

// console.log(c);
// const c=30;
