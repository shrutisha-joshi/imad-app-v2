var button = document.getElementById("counter");
var counter =0;
button.onclick = function(){
    //make request
    
    //capture the status
    
    //render the variable in the correct span
    var counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};