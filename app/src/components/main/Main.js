import Navbar from "../navbar/Navbar";
import Splash from "../splash/Splash.js";
import "./main.css"




function Main(){
return(

  <div className="container-fluid p-0 ">
  <div className="main">
  <Navbar />
  <Splash />


  <div className="row m-2 ">
<div className="col-12 col-md-3 p-0">
<div className="m-3 home" style={{height: "300px", backgroundColor: "rgb(35, 28, 79"}}>
  <img className="homeImage" src="/football.jpg" />

  </div>


</div>

<div className="col-12 col-md-3 p-0">
<div className="m-3 home" style={{height: "300px", backgroundColor: "rgb(35, 28, 79"}}>
<img className="homeImage" src="/football.jpg" />
  </div>


</div>

<div className="col-12 col-md-3 p-0">
  <div className="m-3 home" style={{height: "300px", backgroundColor: "rgb(35, 28, 79"}}>
  <img className="homeImage" src="/football.jpg" />
  </div>


</div>

<div className="col-12 col-md-3 p-0">
  <div className="m-3 home" style={{height: "300px", backgroundColor: "rgb(35, 28, 79"}}>
  <img className="homeImage" src="/football.jpg" />
  </div>


</div>
  </div>

  </div>  
  </div>

);


}



export default Main;