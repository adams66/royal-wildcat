import { Key } from "../../key/key.json";
import "../Home/home.css";
import Foundation from "../../layout/Foundation";
import HomeHeader from "./homeComponents/HomeHeader";
import HomeGrid from "./homeComponents/HomeGrid";
import Button from "../../layout/components/Button/Button";
import {useEffect} from "react";
import { useState } from "react";





function Home() {
const [royal, SetRoyal] = useState();




function click(e){
  var value = e.target.getAttribute('data-theme');
  switch(value){
    case "wildcat": 
    localStorage.setItem("theme", "wildcat");
    SetRoyal(value);
    break;
    
    case "chief":
    localStorage.setItem("theme", "chief"); 
    SetRoyal(value);
    
    break;

    case "jayhawk": 
    localStorage.setItem("theme", "jayhawk");
    SetRoyal(value);
    
    break;

    default:
    localStorage.setItem("theme", "wildcat");  
    SetRoyal("wildcat");
    
    
  }
}






  useEffect(() => {
  var getTheme = localStorage.getItem("theme");
  console.log(getTheme);
  if(getTheme == null){
    localStorage.setItem("theme", "undecided");
  }

  else{

    SetRoyal(getTheme);
  }


    },[])

    
if(royal !== "undecided"){
  return (
    <Foundation>
    <HomeHeader />
    <HomeGrid  theme={royal}    />
    </Foundation>
    
      );
}

else{
  return(
  <div style={{height: "100vh"}} className="container">
   
   <div style={{height: "100%"}} className="row d-flex justify-content-center align-items-center">
    <div  className="col-12 col-md-3 d-flex justify-content-center">
     <button data-theme="wildcat" onClick={click}>Wildcat</button>
    </div>
    <div className="col-12 col-md-3 d-flex justify-content-center">
     <button data-theme="chief" onClick={click}>chief</button>
    </div>

    <div className="col-12 col-md-3 d-flex justify-content-center">
     <button data-theme="jayhawk" onClick={click}>jayhawk</button>
    </div>
   </div>
  </div>
  )
}

}

export default Home;
