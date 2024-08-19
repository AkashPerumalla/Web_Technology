let ajax = new XMLHttpRequest();
console.log(ajax);

ajax.open("GET","https://fakestoreapi.com/products");

ajax.onload = () => {

    console.log(ajax);
    console.log(ajax.status);
    console.log(ajax.response);

    let data = JSON.parse(ajax.response);
    console.log(data);

    data.map((res) => {
        // console.log(res);
        let table = document.getElementById("table");
        // console.log(table);
        let tr = `
        <tr>
        <td>${res.id}</td>
        <td>${res.title}</td>
        <td><img src=${res.image} /></td>
        </tr>`

        table.innerHTML += tr;
    })


}

ajax.send()