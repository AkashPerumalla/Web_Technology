//print any content on web-page

// document.write()
// document.writeln()

// document.write("hello-world")
// document.writeln("hello-world")
// document.write("hello-world")
// document.writeln("hello-world")
// document.write("hello-world")
// document.writeln("hello-world");
// document.write("<br>")
// document.write("<h1>web-tech</h1>")

//direct access

// console.log(document.URL);
// console.log(document.baseURI);
// console.log(document.doctype);
// console.log(document.head);

// console.log(document.title);

// document.title='flipkart 🤩';
// console.log(document.body);

// console.log(document.links);
// console.log(document.links[0]);
// console.log(document.links[1]);
// console.log(document.links[2]);

let link = document.links
console.log(link);
console.log(link.length);

link[0].id = 'demo1';
link[0].href = "http://www.netflix.com";

for (let i = 0; i < link.length; i++) {
    console.log(link[i]);
    link[i].className = "demo"
}

//set Attribute

link[0].setAttribute("target","blank");

//get Attribute

console.log(link[0].getAttribute("target"));

link[0].removeAttribute("target");

// console.log(link[0].getAttribute("target"));


//assignment using Images and Forms

let image = document.images
console.log(image);
console.log(image.length);

for (let i = 0; i < image.length; i++) {
    console.log(image[i]);
    image[i].className="heightWidth";
    image[i].setAttribute("style","border:2px solid red");
}
console.log(image[0].getAttribute("style"));

image[1].removeAttribute("style")






