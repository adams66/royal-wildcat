import Key from "../key/key.json";



function theme(){
var getTheme = localStorage.getItem("theme");

if(getTheme){
  if(getTheme === "wildcat"){
    return "btn-wildcat";

  }
  
  else{
    return "btn-chief";
  }


}


}


export default theme;