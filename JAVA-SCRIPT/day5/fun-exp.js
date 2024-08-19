// // demo();
// // console.log(demo());

// let demo = function () {
//     console.log("hello");
// }

// console.log(demo);
// demo()
// console.log(demo());//undefined

// let demo2 = function demo1()
// {
//     console.log("Hello world!!!");
// }

// // demo1();
// demo2();

/**
 * Task:
 * create a function expersion to perform arthimatic operation of 2 numbers and input should be given by end user
 * 


var num1 =Number(prompt("Enter Num1 value: "));
var num2 =Number(prompt("Enter Num2 value: "));

let sum = function (num1,num2) {
    let sum = num1+num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
} 

let sub = function (num1,num2) {
    let sub = num1-num2;
    console.log(`The sub of ${num1} and ${num2} is ${sub}`);
    
}
let mul = function (num1,num2) {
    let mul = num1*num2;
    console.log(`The mul of ${num1} and ${num2} is ${mul}`);
    
}
let div = function (num1,num2) {
    let div = num1/num2;
    console.log(`The div of ${num1} and ${num2} is ${div}`);
    
}
let mod = function (num1,num2) {
    let mod = num1%num2;
    console.log(`The mod of ${num1} and ${num2} is ${mod}`);
}

sum(num1,num2);
sub(num1,num2);
mul(num1,num2);
div(num1,num2);
mod(num1,num2);

*/

/**
 * Function Programming
 */
console.log(null);
function operation(a, b, task) {//operation is HOF & task() is a CBF
  let c = task(a, b);
  return c;
}

let result1 = operation(10, 20, function (a, b) {
  return a + b;
});
console.log(result1);

let result2 = operation(10, 20, function (a, b) {
  return a - b;
});
console.log(result2);
