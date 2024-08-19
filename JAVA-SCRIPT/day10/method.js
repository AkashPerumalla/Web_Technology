// let a = document.getElementById("demo");
// console.log(a);
// a.style.border = "2px solid";
// a.style.backgroundColor = "red";

// console.dir(a);
// console.log(a.children);

// a.children[0].textContent = "Web-Tech";
// a.children[0].style.color = "yellow";

// a.children[2].textContent = "SQL";
// a.children[2].style.color = "yellow";

// method 1

// let text = a.childNodes;
// console.log(text);
// text[6].textContent= "java";

// method 2

// console.log(a.lastElementChild);
// traversal
// console.log(a.lastElementChild.nextSibling.textContent);
// a.lastElementChild.nextSibling.textContent="Java";



// let b = document.getElementsByClassName("demo1");
// console.log(b);
// console.log(b[0]);

// b[0].style.backgroundColor = "Red";
// b[1].textContent = "React-Js";

let c = document.getElementsByTagName("ol");
// console.log(c);

// console.log(c[0]);

// console.log(c[0].children);
// console.log(c[0].children[0]);

// console.dir(c[0].children[0]);


// c[0].children[2].style.border= "2px solid";

// console.log(c[0].children[2].parentElement);
// console.log(c[0].children[2].parentNode);


// console.log(c[0].children[2].parentElement.nextElementSibling.style.backgroundColor = "Red");



// let d = document.getElementsByName("demo2");

// console.log(d);
// console.log(d[0]);
// d[0].style.backgroundColor= "Green";
// console.log(d[1]);
// d[1].style.border= "2px solid";


// let e = document.querySelector("#demo");
// console.dir(e);

// let f = document.querySelector(".demo1");
// console.log(f);

// let y = document.querySelector("*");
// console.log(y);
// let z = document.querySelectorAll("*");
// console.log(z);



// console.log(z[14]);


// console.log(z[14].setAttribute("src","#"));

//properties/Traversals of DOM

//

let ol =document.getElementById("demo");
// console.dir(ol);
//firstElementChild && first child
// console.log(ol.firstChild);
// console.log(ol.firstElementChild);

// //lastElementChild && last child

// console.log(ol.lastChild);
// console.log(ol.lastElementChild);


// //parentElement && parentNode
// let a = ol.firstElementChild;
// console.log(a.parentElement);

// let b = ol.lastElementChild;
// console.log(b.parentNode); 

// //childern && childNodes
// console.log(ol.children);
console.log(ol.childNodes);

//nextSibling && nextElementSibiling || prevSibling && prevElementSibling


console.log(ol.children[1].previousSibling);
console.log(ol.children[1].previousElementSibling);

console.log(ol.children[0].nextSibling);
console.log(ol.children[0].nextElementSibling);


