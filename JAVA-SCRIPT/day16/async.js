
function main(m,n) {
new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isNaN(m)||isNaN(n)){
            return reject();
        }
        for (let i = m; i < n; i++) {
            console.log(i); 
        }
    return resolve();
    },5000)})
    .then(()=> {

            console.log("then block executed...")
    })
    .catch(() => {
        
            console.log("Catch block executed...");
    })
}    

main(1,10)

function demo() {
    console.log("no's printed");
}
demo()