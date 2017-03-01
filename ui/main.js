//counter code
var button = document.getElementById("counter");

button.onclick = function(){
    //create request object
    var request= new XMLHttpRequest();
    
    //capture the status and store it in a variable
    request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE ){
          if (request.status===200){
              var counter=request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
      }//not done
        
    };
    //make a request
    request.open('GET','http://shrutisha-joshi.imad.hasura-app.io/counter',true);
    request.send(null);
};