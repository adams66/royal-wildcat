import Navbar from "../navbar/Navbar";
import Splash from "../splash/Splash.js";
import "./main.css"



function Main(){
return(

  <div className="container-fluid p-0 ">
  <div className="main">
  <Navbar />
  <Splash />


  <div className="row m-1 ">
<div className="col-12 col-md-4 p-0">
<div className="m-2 home" style={{height: "300px", backgroundColor: "rgb(35, 28, 79"}}>

  </div>


</div>

<div className="col-12 col-md-4 p-0">
<div className="m-2 home" style={{height: "300px", backgroundColor: "rgb(35, 28, 79"}}>

  </div>


</div>

<div className="col-12 col-md-4 p-0">
  <div className="m-2 home" style={{height: "300px", backgroundColor: "rgb(35, 28, 79"}}>

  </div>


</div>
  </div>

  </div>  
  </div>

);


}



export default Main;