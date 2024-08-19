let ajax = new XMLHttpRequest();
console.log(ajax);


let btn = document.getElementById("btn");
btn.addEventListener("click",() => {

    let query = document.getElementById("query").value;
    console.log(query);

    ajax.open("GET",`https://pixabay.com/api/videos/?key=42539185-951246fe4cb492c72a8058a6f&q=${query}`)
    ajax.onload = () => {
        console.log(ajax.response);
        let vid = JSON.parse(ajax.response);
        // console.log(vid.hits);

        vid.hits.map((data) => {
            let url = data.videos.small.url;
            let videos = `<video src=${url} controls></video>`;
            let main = document.getElementById("main");
            main.innerHTML += videos;
        })
    };
    ajax.send();
})


