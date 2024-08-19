let text1 = document.getElementById("t1");
console.log(text1);
let text2 = document.getElementById("t2");
console.log(text2);


text1.onkeyup =() => {
    if(text2.value != text1.value){
        text2.textContent = text1.value;
    }  
    text2.textContent = text1.value;
}

text2.onkeyup =() => {
    if(text1.value != text2.value){
        text1.textContent = text2.value;
    }
    text1.textContent = text2.value;
}