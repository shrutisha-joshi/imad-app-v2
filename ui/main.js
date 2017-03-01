//counter code
var button = document.getElementById("counter");
var counter = 0;

button.onclick = function(){
    //create request object
    var request=new XMLHttpRequest();
    
    //capture the status
    request.onreadystatechange = function(){
      if (request.readystate == XMLHttpRequest.DONE ){
          if (request.status===200){
              var counter=request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
      }//not done
        
    };
    //render the variable in the correct span
    counter=counter+1;
    //make a request
    request.open('GET','http://shrutisha-joshi.imad.hasura-app.io/counter',true);
    request.send(null);
};