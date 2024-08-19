// //1st Way

// function demo() {
//     console.log("Hello-world");
// }

// //2nd Way

// let btn = document.getElementById("btn");

// btn.onclick = function () {
//     console.log("HELLO_WORLD");
// }

// ///TASK

// let a = window.prompt("Enter Any Color_Name: ");
// // console.log(a);

// let btn1 = document.getElementById("btn1");
// // console.log(btn1);

// btn1.innerHTML = `${a}`;

// btn1.onmouseover = function () {
//     document.body.style.backgroundColor = `${a}`;

//     document.body.style.transition = "ease all 5s";

//     btn1.style.backgroundColor = `${a}`;
//     btn1.style.transition = "ease all 5s";

// }


//Eg:-

// let btn2 = document.querySelector("#btn2");
// console.log(btn2);

// btn2.onclick = function () {
    
//     let res = Math.round(Math.random()*10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor = `#${res}`;
// }

// let demo = document.querySelector("#demo");
// console.log(demo);

// demo.onkeyup = function () {
    
//     let res = Math.round(Math.random()*10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor = `#${res}`;
// }

// demo.onkeydown = function () {
    
//     let res = Math.round(Math.random()*10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor = `#${res}`;
// }


let video = document.querySelector("#video");
let btn4 = document.getElementById("btn4");

console.log(video);

video.onclick = function () {
    // control.setAttribute("controls","autoplay");


    let display = video.classList.toggle(true);

    if(display){
        video.play();
        // btn4.innerText = "Play";

    }else{
        video.pause();
        // btn4.innerText = "Pause";
    }
    
}
btn4.onclick = function () {
    // control.setAttribute("controls","autoplay");


    let display = video.classList.toggle(true);

    if(display){
        video.play();
        btn4.innerText = "Play";

    }else{
        video.pause();
        btn4.innerText = "Pause";
    }
    
}
