import Navbar from "../navbar/Navbar";
import Splash from "../splash/Splash.js";
import "./main.css"



function Main(){
return(

  <div className="container-fluid p-0 ">
  <div className="main">
  <Navbar />
  <Splash />


  <div className="row m-3 ">
<div style={{height: "300px", backgroundColor: "purple"}} className="col-12 col-md-4">


</div>

<div style={{height: "300px", backgroundColor: "red"}} className="col-12 col-md-4">


</div>

<div style={{height: "300px", backgroundColor: "blue"}} className="col-12 col-md-4">


</div>
  </div>


  </div>  
  </div>

);


}



export default Main;