console.log('Loaded!');

//change the text of the html file
var element=document.getElementById("main-text");
element.innerHTML="new value i changed";
// move the image
var img=document.getElementById("madi");
img.onclick=function(){
    img.style.marginLeft="100px";
}