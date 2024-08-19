function main(m,n) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isNaN(m)||isNaN(n)){
                return reject();
            }
            for (let i = m; i < n; i++){
                console.log(i);         
            }
            return resolve();
        },3000)
    })
    .then(()=>{
        console.log("Promise is successful!!!");
    })
    .then(()=>{
        console.log(5+20);
    })
    .catch(()=>{
        console.log("Error occured");
    })
    
}

let op = main(1,'10a');


function demo() {
    console.log("Number's printed!!!");
}
demo()











// let btn = document.getElementById("btn");

// let api = true;

// btn.onclick = () => {
//     api = btn.classList.toggle(true);
//     let promise = new Promise((resolve, reject) => {

//         setTimeout(() => {
//         if (api) {
//             return resolve();
    
//         }else{
//             return reject();
//         }
    
//         },3000)
    
        
//     })
//     .then(() => {
    
//         console.log("api fetched successfully");
//     })
//     .catch(() => {
    
//         console.log("api fetched not successfully");
    
//     })
// }
