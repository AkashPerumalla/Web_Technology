// //Literal way

// let obj = {
//     name: 'akki',
//     id: 1,
//     boolean: true,
//     null:null,
//     undefined:undefined,
//     bigint:10n,
//     arr:[10,20,30],
//     obj1:{
//         designation:"developer"
//     },
//     demo:function () {
//         console.log('hello');
        
//     }
// }

// console.log(obj);
// console.log(obj.arr);
// console.log(obj.demo);
// obj.demo();

// //Constructor Function
// function obj2(name,id){
//     this.name=name;
//     this.id=id;
// }

// let p1 = new obj2('anil',100);
// console.log(p1);

//Object Methods

let obj ={
    name:'anil',
    id:1
}
console.log(obj);

//update existing values
obj.id=100;
console.log(obj);

//add new key and value pair
obj.designation="developer";
console.log(obj);

//delete key and value pair

delete obj.designation;
console.log(obj);

//to concat 2 objects we go for assign()

let obj1 ={
    location:"abc",
}
console.log(obj1);

Object.assign(obj,obj1)

console.log(obj);

//entries()=converts objects into Array method

let obj2 = Object.entries(obj);
console.log(obj2);

//seal()

// Object.seal(obj);
// console.log(Object.isSealed(obj));

// obj.last_name="kumar";//can't update new key and value pair
// console.log(obj);

// obj.id=200;//Existing can be updated...
// console.log(obj);

//freeze()
console.log(Object.isFrozen(obj));

Object.freeze(obj);//freezing

console.log(Object.isFrozen(obj));

obj.last_name="kumar";//can't create new K and V
console.log(obj);

obj.name="Abhi";//can't update existing K and V
console.log(obj);

//
console.log(Object.keys(obj));//array of keys
console.log(Object.values(obj));//array of values


