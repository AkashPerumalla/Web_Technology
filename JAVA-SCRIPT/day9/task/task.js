let color = prompt("Enter any color: ");

// let color = "blue";
console.dir(document.body);

let bt = document.body.children[0];
console.log(bt);

bt.textContent = color;

bt.style.backgroundColor= color;
bt.style.color="white";

// console.log(bt.value=color);

bt.value=color;

bt.onclick = (e) => {
    e.preventDefault();

    if(bt.value === color ){
        document.body.style.backgroundColor = bt.value;
    }else{
        window.alert("Error Messege")
    }
}