var pageCounter = 1;
var userContainer = document.getElementById("user-info");
var btn = document.getElementById("btn");

btn. addEventListener("click",function(){            
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','http://jsonplaceholder.typicode.com/todos');
    ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    /*console.log(ourData[0]);*/
    /*console.log(ourRequest.responseText);*/
    };
    
    ourRequest.send();
    pageCounter++;
        if(pageCounter>1){
            btn.classList.add("hide-me");
        }               
});


function renderHTML(data){
    
    var htmlString = "";
   
    for( i = 0;i<data.length;i++){
        
        if(data[i].title.startsWith("s")){
        htmlString +=" <p> user id is " + data[i].userId+ 
                    ". id is a " + data[i].id+ 
                    ". <p> the title is " + data[i].title + 
                    "<br> copleted ? " + data[i].completed+
                    "<br> " + "<br> "
            
                    "</p>";
        }
    }
    
     for( i = 0;i<data.length;i++){
    
            if(data[i].title.endsWith("e")){
            
            htmlString +=" <d><s> user id is " + data[i].userId+ 
                    ".<d> id is a " + data[i].id+ 
                    ".<d> the title is " + data[i].title + 
                    ".<d> <br> copleted ? " + data[i].completed+
                    "<br> " + "<br> "
            
                    "</p>";
            
        }
     }
    userContainer.insertAdjacentHTML('beforeend',htmlString);
    
}
