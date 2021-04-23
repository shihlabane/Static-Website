

 function  showSlides(n){
   
    var button = document.getElementsByClassName("myslide");

    
     
    for(i=0; i < button.length; i++){
          
       button[i].style.display = "none"
    }
    button[n].style.display = "block";

  

 }
 function  textSlides(n){
   
   var button = document.getElementsByClassName("text");
   
    
   for(i=0; i < button.length; i++){
         
      button[i].style.display = "none"
   }
   button[n].style.display = "block";

 

}

