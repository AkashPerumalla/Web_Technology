let demo = document.querySelector("#demo");
console.log(demo);

demo.addEventListener("click",(e)=>{
    // console.log(e);
    // console.log(e.target);
    if(e.target.tagName === "BUTTON"){
        console.log("Akash");
    }
});

let ol = document.querySelector("ol");
console.log(ol);
ol.addEventListener("click",(e)=>{
    // console.log(e);
    // console.log(e.target);
    if(e.target.tagName === "LI"){
        console.log("OLTAG");
    }
});