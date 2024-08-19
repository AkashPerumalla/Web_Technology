let add = document.getElementById("add");
console.log(add);

let ip = document.getElementById("ip");
console.log(ip);

let op = document.getElementById("op");
console.log(op);

add.onclick = () => {
    
    let r1 = document.createElement("tr");

    let c1 = document.createElement("td");
    let data = ip.value;
    c1.append(data);

    let c2 = document.createElement("td");
    let remove = document.createElement("button");
    remove.innerText="Delete";
    c2.append(remove);

    remove.onclick = () =>{
        (remove.parentElement.parentElement).remove();
        ip.value = "";
    }
    
    let c3 = document.createElement("td");
    let edit = document.createElement("button");
    edit.innerText = "Edit";
    c3.append(edit);

    edit.onclick = () => {
        if(edit.innerText=="Update"){
            if(ip.value != data){
                c1.innerText = "";
                data = ip.value;
                c1.append(data); 
                edit.innerText = "Edit";
                ip.value = "";
            }
                 
        }else{
            edit.innerText = "Update";
            ip.value = data;
        }
    }

    r1.append(c1);
    r1.append(c2);
    r1.append(c3);

    op.append(r1);

    ip.value = "";

}


