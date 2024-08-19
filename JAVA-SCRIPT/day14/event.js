// let video = document.querySelector("video");
// console.log(video);

// let demo = document.getElementById("demo");
// console.log(demo);


// function demo() {
//     let res= window.navigator.geolocation.getCurrentPosition((demo)=>{
//         console.log(demo);
//         let {latitude,longitude} = demo.coords;

//         let maps = `https://www.google.com/maps/search/${latitude},${longitude}`;
//         console.log(maps);


//     })
//     console.log(res); 
// }
// demo()

        // Check if the browser supports WebRTC
    //    else {
    //         console.error('WebRTC is not supported in this browser');
    //     }

demo.onclick = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    var video = document.getElementById('webcam');
                    video.srcObject = stream;
                })
        
    } 
    
}


// let speech = new SpeechSynthesisUtterance();
// console.log(speech);

// let btn = document.querySelector("#btn");
// console.log(btn);

// btn.onclick = () => {
//     let demo = document.getElementById("demo").value
//     speech.text = demo;
//     speechSynthesis.speak(speech);
// }