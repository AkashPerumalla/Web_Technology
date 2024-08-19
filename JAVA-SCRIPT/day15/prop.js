// let gp = document.querySelector("#grand-parent");
// console.log(gp);

// gp.addEventListener("click", (e) => {
//     console.log("grand-parent clicked");
//     console.log(e.target);
//     e.stopImmediatePropagation();
//     e.target.style.backgroundColor = "orange";

// },false);

// let p = document.querySelector("#parent");
// console.log(p);

// p.addEventListener("click", (f) => {
//     console.log("parent clicked");
//     console.log(f.target);
//     f.stopImmediatePropagation();

//     f.target.style.backgroundColor = "navy";

// },false);

// let c = document.querySelector("#child");
// console.log(c);

// c.addEventListener("click", (g) => {
//     console.log("child clicked");
//     console.log(g.target);
//     g.stopImmediatePropagation();

//     g.target.style.backgroundColor = "green";

// },false);


let p1 = document.querySelector("#parent1");
console.log(p1);

p1.addEventListener("click", (e) => {
    console.log("parent-1 clicked");
    console.log(e.target);
    e.stopImmediatePropagation();
    e.target.style.backgroundColor = "orange";

},false);

let c1 = document.querySelector("#child1");
console.log(c1);

c1.addEventListener("click", (e) => {
    console.log("child-1 clicked");
    console.log(e.target);
    e.stopImmediatePropagation();
    e.target.style.backgroundColor = "yellow";

},false);

let c2 = document.querySelector("#child2");
console.log(c2);

c2.addEventListener("click", (e) => {
    console.log("child-2 clicked");
    console.log(e.target);
    e.stopImmediatePropagation();
    e.target.style.backgroundColor = "green";

},false);