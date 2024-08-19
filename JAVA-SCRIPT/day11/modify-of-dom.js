// let a = document.body;
// console.log(a);

// a.innerHTML += "<h2>Web-Tech</h2>";

// a.innerHTML += "";


// let div = document.querySelector("div");
// console.log(div);
// div.style.border = "2px solid";

// div.innerHTML += `<ol>
// <li>java</li>
// <li>java-script</li></ol>`;


//createElement Method

let h2 = document.createElement("h2");
console.log(h2);

h2.textContent = "hello-world";
document.body.appendChild(h2);

//---------------------

let div = document.querySelector("div");
console.log(div);

let ol = document.createElement("ol");

let li1 = document.createElement("li");
let li2 = document.createElement("li");

li1.textContent = "java";
li2.textContent = "java-script";

ol.appendChild(li1);
ol.appendChild(li2);

console.log(ol);
div.append(ol);

