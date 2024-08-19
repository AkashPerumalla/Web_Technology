//Css using DOM properties
let b = document.body
b.style.backgroundColor="silver"

let ol1 = b.firstElementChild

let bgc1 = ol1.firstElementChild;
bgc1.style.backgroundColor="lightpink";

let red1 = bgc1.firstElementChild.firstElementChild;

let ul1=red1.firstElementChild;
ul1.firstElementChild.style.backgroundColor="yellow";
ul1.firstElementChild.nextElementSibling.style.backgroundColor="blue";
ul1.lastElementChild.style.backgroundColor="green";

red1.style.backgroundColor = "red";


let blue1 = red1.nextElementSibling;
blue1.style.backgroundColor = "blue";
let red2 =  blue1.nextElementSibling;
red2.style.backgroundColor = "red";


let obgc2 = red2.firstElementChild
obgc2.style.backgroundColor="grey"

let ol2 = red2.firstElementChild.firstElementChild.firstElementChild;

ol2.firstElementChild.style.backgroundColor="red";
ol2.lastElementChild.style.backgroundColor="blue";

let obgc1 =  ol1.lastElementChild;
obgc1.style.backgroundColor="lightblue"

let ul2 = obgc1.firstElementChild;

let red3 = ul2.firstElementChild;
red3.style.backgroundColor="red";

let ol3 = red3.firstElementChild;
ol3.firstElementChild.style.backgroundColor="yellow";
ol3.lastElementChild.style.backgroundColor="red";

ul2.lastElementChild.style.backgroundColor="crimson";
