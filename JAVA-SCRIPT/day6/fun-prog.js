// example1

// function main(a) {
//     let c=a();
//     return c;
// }

// let demo = main(function () {
//     // console.log("hello");
//     return 'hello';
// })

// // console.log(main);
// console.log(demo);

// // demo

// let demo1= main(function () {
//     // console.log("java"); 
//     return 'java';
// })

/*  console.log(demo1);
// // demo1

function main(a,b) {
    let c=a();
    let d=b();
    console.log(c,d);
}

main(function () {
    return 'java';
},function () {
    return 'web-tech';
})
*/

//task create  HOF and CBF to perform arithematic operation of two numbers using function declaration statement and function expression 
// note input should be given by end user 


/* function declaration

function arithematic(num1,num2,operation) {
   let result = operation(num1,num2);
   return result;
}
*/

/* function expression

function arithematic(sum,sub,mul,div,mod) {
    console.log(sum());
    console.log(sub());
    console.log(mul());
    console.log(div());
    console.log(mod());

}
*/

/*
let a = Number(prompt("Enter a Num1: "));
let b = Number(prompt("Enter a Num2: "));

*/
//method call


/*
let sum = arithematic(
    a = Number(prompt("Enter a Num1: (sum)")),
    b = Number(prompt("Enter a Num2: (sum)"))
    ,function () {
    return a+b;
})

alert(`The sum of ${a} and ${b} is ${sum}`);

let sub = arithematic(
    a = Number(prompt("Enter a Num1: (sub)")),
    b = Number(prompt("Enter a Num2: (sub)"))
    ,function () {
    return a-b;
})

alert(`The sub of ${a} and ${b} is ${sub}`);

let mul = arithematic(
    a = Number(prompt("Enter a Num1: (mul)")),
    b = Number(prompt("Enter a Num2: (mul)")),
    function () {
    return a*b;
})

alert(`The mul of ${a} and ${b} is ${mul}`);

let div = arithematic(
    a = Number(prompt("Enter a Num1: (div)")),
    b = Number(prompt("Enter a Num2: (div)")),
    function () {
    return a/b;
})

alert(`The div of ${a} and ${b} is ${div}`);

let mod = arithematic(
    a = Number(prompt("Enter a Num1: (mod)")),
    b = Number(prompt("Enter a Num2: (mod)")),
    function () {
    return a%b;
})

alert(`The mod of ${a} and ${b} is ${mod}`);
*/
/*
to perform arthimatic operation for 3 numbers and largest of 3
*/
/*
function arithematic(num1,num2,num3,operation) {
    let result = operation(num1,num2,num3);
    return result;
 }

let sum = arithematic(
    a = Number(prompt("Enter a Num1: (sum)")),
    b = Number(prompt("Enter a Num2: (sum)")),
    c = Number(prompt("Enter a Num3: (sum)"))
    ,function () {
    return a+b+c;
})

alert(`The sum of ${a},${b} and ${c} is ${sum}`);

let sub = arithematic(
    a = Number(prompt("Enter a Num1: (sub)")),
    b = Number(prompt("Enter a Num2: (sub)")),
    c = Number(prompt("Enter a Num3: (sum)"))
    ,function () {
    return a-b-c;
})

alert(`The sub of ${a},${b} and ${c} is ${sub}`);

let mul = arithematic(
    a = Number(prompt("Enter a Num1: (mul)")),
    b = Number(prompt("Enter a Num2: (mul)")),
    c = Number(prompt("Enter a Num3: (sum)")),
    function () {
    return a*b*c;
})

alert(`The mul of ${a},${b} and ${c} is ${mul}`);

let div = arithematic(
    a = Number(prompt("Enter a Num1: (div)")),
    b = Number(prompt("Enter a Num2: (div)")),
    c = Number(prompt("Enter a Num3: (sum)")),
    function () {
    return a/b/c;
})

alert(`The div of ${a},${b} and ${c} is ${div}`);

let mod = arithematic(
    a = Number(prompt("Enter a Num1: (mod)")),
    b = Number(prompt("Enter a Num2: (mod)")),
    c = Number(prompt("Enter a Num3: (sum)")),
    function () {
    return a%b%c;
})

alert(`The mod of ${a},${b} and ${c} is ${mod}`);

*/
//largest of 3 numbers

function largest(num1,num2,num3,operation){
    let result = operation(num1,num2,num3);
    return result;
}

let greatest = largest(
    a = Number(prompt("Enter a Num1: (large)")),
    b = Number(prompt("Enter a Num2: (large)")),
    c = Number(prompt("Enter a Num3: (large)")),
    function () {
        if(a>b){
            if(a>c){
                return a;
            }else{
                return c;
            }
        }else{
            if(b>c){
                return b;
            }else{
                return c;
            }
        }
        // return (a>b)?((a>c)?a:c):((b>c)?b:c);
})

console.log(greatest);
alert(`The greatest of ${a},${b} and ${c} is ${greatest}`);