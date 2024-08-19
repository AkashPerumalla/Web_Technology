let div = document.querySelector("div");
// div.style.border = "2px solid";

let table = document.createElement("table");
console.log(table);

let tr1 = document.createElement("tr");

let td11 = document.createElement("td");
td11.textContent = "A";
let td12 = document.createElement("td");
td12.textContent = "B";
let td13 = document.createElement("td");
td13.textContent = "C";


let tr2 = document.createElement("tr");

let td21 = document.createElement("td");
td21.textContent = "D";
let td22 = document.createElement("td");
td22.textContent = "E";
let td23 = document.createElement("td");
td23.textContent = "F";


let tr3 = document.createElement("tr");
let td31 = document.createElement("td");
td31.textContent = "G";
let td32 = document.createElement("td");
td32.textContent = "H";
let td33 = document.createElement("td");
td33.textContent = "I";

div.appendChild(table);

table.appendChild(tr1);
tr1.appendChild(td11);
tr1.appendChild(td12);
tr1.appendChild(td13);

table.appendChild(tr2);
tr2.appendChild(td21);
tr2.appendChild(td22);
tr2.appendChild(td23);

table.appendChild(tr3);
tr3.appendChild(td31);
tr3.appendChild(td32);
tr3.appendChild(td33);



table.setAttribute("border","2px");
table.setAttribute("height","400px");
table.setAttribute("width","400px");

table.setAttribute("cellspacing","10px");
table.setAttribute("cellpadding","10px");


console.log(table);