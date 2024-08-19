// function demo(a,...b) {
//     console.log(a);
//     console.log(b);
//     console.log(b[0]);
    
// }
// demo(10,20,30,40);

// let str ="hello";
// console.log(str);
// console.log(...str);
// console.log([...str]);

// let arr = [10,20,30];
// console.log(arr);
// console.log(...arr);


//Object De-structure

let obj = {
    name:'abhi',
    id:1
}

console.log(obj);

let {name} = obj;
console.log(name);
let {id,roll_num="msg not found"} = obj;
console.log(id);
console.log(roll_num);

let arr = [10,20,30];
console.log(arr);

let [a,b] = arr;//destructure in sameline only in case of Arrays
console.log(a);
console.log(b);
// let [b]=arr;
// console.log(b);

//rest-parameter

let {...c} = obj;
console.log(c);
console.log(c.name);
console.log(c.id);
console.log(c.roll_num);

//spread operator

let m = [10,20,30];
console.log(m);

let n=m;
console.log(n);

m[3]=40;
console.log(m);
console.log(n);

//deep-copy

let arr3 = [10,20,30];
console.log(arr3);
let arr4 = [...arr3];
console.log(arr4);

arr3[3]=50;

console.log(arr3);
console.log(arr4);