// by using literal way

let str = `Hello-World`;
console.log(str);
console.log(typeof str);

//by using new keyword


let str1 = new String('Hello World')
console.log(str1);
console.log(typeof str1);


//Methods of String

//length
console.log(str.length);

//indexof
console.log(str.indexOf('h'));
console.log(str.indexOf('w'));

//charAt
console.log(str1.charAt(2));
//charCodeAt
console.log(str1.charCodeAt(2));

//touppercase
console.log(str.toUpperCase());
//tolowercase
console.log(str.toLowerCase());

//split
console.log(str.split(''));
console.log(str1.split(" "));
console.log(str1.split('| '));

//slice

console.log(str.slice(0,4));
console.log(str.slice(-4,-1));

console.log(str.substring(0,9));
console.log(str.substring(-4,-9));//no output

console.log(str.substr(0,8));
console.log(str.substr(-4,-9));//no output

//startsWith
console.log(str1.startsWith('h'));
console.log(str1.startsWith('H'));

//endsWith
console.log(str1.endsWith('d'));
console.log(str1.endsWith('D'));

//repeat
console.log(str1.repeat(5));

//trim
let t = ` helloAkki `;
let t1 = ` hello Akki `;

console.log(t.length);
console.log(t1.length);


console.log(t.trim());
console.log(t.trim().length);

console.log(t1.trim());
console.log(t1.trim().length);

console.log(str.concat(t));

//reverse

console.log(t.split(``).reverse().join(''));