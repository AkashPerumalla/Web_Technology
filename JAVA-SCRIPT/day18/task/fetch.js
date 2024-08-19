

window.fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then((data) => {
    
    console.log(data);


    for (let element of data) {


        let tr = `
        <tr>
        <td>${element.id}</td>
        <td>${element.category}</td>
        <td>${element.title}</td>
        <td>${element.description}</td>
        <td>${element.price}</td>
        <td><img src=${element.image} /></td>
        </tr>`

        op.innerHTML += tr;

    }

    
    // console.log(data[1].id);
    // console.log(data[1].category);
    // console.log(data[1].title);
    // console.log(data[1].description);
    // console.log(data[1].price);
    // console.log(data[1].image);
        


    
   

})