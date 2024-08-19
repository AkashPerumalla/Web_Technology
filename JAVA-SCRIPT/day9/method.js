// let img = document.images;
// console.log(img);

// // console.log(Array.isArray(img));

// // let a = Array.from(img);
// // console.log(a);

// // console.log(Array.isArray(a));

// // console.log(img[0]);

// for (let i = 0; i < img.length; i++) {
//     console.log(img[i]);
//     img[i].style.height = "300px";
//     img[i].style.widtht = "300px";

//     img[i].style.borderRadius = "100%";

//     img[i].setAttribute("alt","demo") 
// }


//forms

let form = document.forms;
console.log(form);

console.log(form[0]);
form[0].style.height = "400px";
form[0].style.width = "400px";
form[0].style.backgroundImage = "url(https://cdn.pixabay.com/photo/2024/02/07/19/01/azalea-8559607_1280.jpg)"


console.dir(form[0])
form[0].onsubmit = (e) => {
    e.preventDefault();

    let name = form[0].children[1];
    console.log(name);
    let password = form[0].children[4];
    console.log(password);

    console.log(name.value,password.value);

    if(name.value === "abhi" && password.value === "abhi@123"){
        window.open("http://www.youtube.com")
    }else{
        window.alert("Error Messege")
    }
}

/*
create 2 html files 
1: login.html should contain feilds like : text password submit button
proper input open home page
2: home.html design nav background img 
*/
