let data = async () => {
    let res = await window.fetch("data.json")
    console.log(res);
    let data = await res.json();
    console.log(data);

    console.log(data[0]);

    for (let ele of data) {
        // console.log(ele);
        let demo = document.getElementById("demo");
        let dl = document.getElementById("dl");
        // console.log(demo);
        // console.log(dl);
        let option = `
        <option value = ${ele.country}>${ele.country}</option>`

        demo.innerHTML+=option;
        dl.innerHTML+=option;

    }
}
data()


// window.fetch("https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json")
//axeos


// async function demo() {
//     await
// }
// demo();

// let demo = async function () {
//     await 
// }
// demo()