//using Literal way
// let arr = [10,'hello',true,undefined,null,1n]
// console.log(arr);
//by using new keyword

// let arr1 = new Array(10,20,30);
// console.log(arr1);

//methods

let arr  = [10,20,30,40]
console.log(arr);

//length
console.log(arr.length);

//indexof()
console.log(arr.indexOf(20));

//unshift
arr.unshift(1,2);
console.log(arr);

//shift
arr.shift();
console.log(arr);

//push
arr.push(50);
console.log(arr);

//pop
arr.pop();
console.log(arr);

//slice
console.log(arr.slice(0,3));
console.log(arr);

//splice

let arr2 = arr.splice(0,3,'hello')
console.log(arr2);
console.log(arr);

//reverse
console.log(arr.reverse());

//join
console.log(arr.join('+'));

//concat
let arr3 = [10,20];
let arr4 = [30,40];
console.log(arr3.concat(arr4));

let arr5 = [30,20,10,50,60]
console.log(arr5.sort());

//sort
let arr6 = [100,1,5,1000];
console.log(arr6);
console.log(arr6.sort((a,d) => {
    // return a-d;ascend
    return d-a;//descend
}));

//includes()

console.log(arr6.includes(100));
//toString

console.log(arr6.toString());
//from
let str = 'hello';
console.log(Array.from(str));

//isArray()
console.log(Array.isArray(str));

//forEach()

let arr7 = [10,20,30,40,50];
arr7.forEach((value,index) => {
    console.log(`${index} --> ${value}`);
})

//filter

let a = arr7.filter((ele) => {
    return ele>10;
})

console.log(a);
//map

let b= arr7.map((ele) => {
    return ele+10;
})

//reduce
let c = arr7.reduce((acc,li) => {
    return acc+li
},20)
console.log(c);