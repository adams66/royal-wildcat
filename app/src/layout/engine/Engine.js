

function Engine(){
    var getTheme = localStorage.getItem("theme");

    if(getTheme){
      if(getTheme === "wildcat"){
        return "btn-wildcat";
    
      }
      
      else if (getTheme === "chief") {
        return "btn-chief";
      } else {
        return "btn-wildcat"
        
      }
     
      
    
    
    }
}


export default Engine;