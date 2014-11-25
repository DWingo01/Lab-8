$(document).ready(function(){
   
    //dynamically load content from content.html into .main section
   // $('.dynamic').load('content/content.html');
    
    //add event handler to more link
    $('.more').click(function(e){ 
         e.preventDefault();
         $('.dynamic').load('content/content.html');
         $(this).remove();
    });
    
});