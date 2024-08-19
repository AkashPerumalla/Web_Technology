//arrow-function
//implicit - return arrow function
let a = _ =>{console.log('hello');}
console.log(a);
a();
//explicit - return arrow function
let b = ()=>{return 'hello world'}
console.log(b);
console.log(b());


// creating HOF and CBF using arrow function

let main=(a)=>{
    let b = a();
    return b;
}

let c = main(
     _ =>{
        return 'i am CBF'
    }
)

console.log(c);


let hello = 'hello';

function demo1(){
    let b = 20;
    console.log(b);
    console.log(b);
    console.log(this.b);
}
demo1()