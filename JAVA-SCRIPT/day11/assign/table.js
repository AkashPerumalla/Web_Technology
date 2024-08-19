let table1 = document.createElement("table");

let t1r1 = document.createElement("tr");

let r1c1 = document.createElement("td");
let label1 = document.createElement("label");
label1.textContent="UserName :";

let r1c2 = document.createElement("td");
let input1 = document.createElement("input");


let t1r2 = document.createElement("tr");

let r2c1 = document.createElement("td");
let label2 = document.createElement("label");
label2.textContent="UserId :";


let r2c2 = document.createElement("td");
let input2 = document.createElement("input");


let t1r3 = document.createElement("tr");

let r3c1 = document.createElement("td");
let submit = document.createElement("button");
submit.textContent = "Insert";
submit.setAttribute("type","submit");

t1r1.appendChild(r1c1);
t1r1.appendChild(r1c2);

t1r2.appendChild(r2c1);
t1r2.appendChild(r2c2);

t1r3.appendChild(r3c1);

table1.appendChild(t1r1);
table1.appendChild(t1r2);
table1.appendChild(t1r3);








let tbody = document.getElementById("tbody");

let form = document.forms;
// console.log(form);

form[0].onsubmit = (e) => {
    e.preventDefault();
    
    let i1 = document.getElementById("username");
    let i2 = document.getElementById("userid");

    //fetch Data
    let userName = i1.value;
    let userId = i2.value;

    // console.log(userName);
    // console.log(userId);

    let record =document.createElement("tr");

    let uN=document.createElement("td");
    uN.textContent=userName;
    let iD=document.createElement("td");
    iD.textContent=userId;

    record.appendChild(uN);
    record.appendChild(iD);

    tbody.appendChild(record);

}

