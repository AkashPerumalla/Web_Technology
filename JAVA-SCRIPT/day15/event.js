let click = document.querySelector("#click");


click.onclick = () => {
    let video = document.getElementById("demo");

    window.navigator.mediaDevices.getUserMedia({ audio : true,  video : true })
       .then(function (stream) {       
            video.srcObject = stream;
            video.play();
        })
        .catch(function (error) {
            console.log('Error accessing webcam:');
        });
}


