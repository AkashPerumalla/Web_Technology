let btn = document.getElementById("btn");

btn.onclick = () =>{

    let img = document.getElementById("img");

    let vis = img.classList.toggle(true);

    if(vis){
        img.style.visibility = "hidden";
    }else{
        img.style.visibility = "visible";
    }
    
}

