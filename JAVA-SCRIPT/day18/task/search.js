let form = document.forms[0];
console.log(form);

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let query = document.querySelector("#search").value;
    console.log(query);
    window.fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=bj4SAWDTliHlkSmEDLyNNiYX8PmmKWi8k2Tv85whXSo`)

    .then(res => res.json())
    .then( data => {
        // console.log(data);
        let images = data.results;

        console.log(images);
        let output = document.querySelector("#op");
        for (let image of images) {
            let img = `<img src=${image.urls.small} / >`
            output.innerHTML += img;
        }

    })
    .catch(e => console.log('Error fetching images:'));
});


// let images = async () => {

// }
