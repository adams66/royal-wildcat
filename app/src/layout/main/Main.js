import Navbar from "../navbar/Navbar";

import "./main.css";



function Main(props){
return(

  <div className="container-fluid p-0 ">
  <div className="main ">
  <Navbar />
     {props.children}
  </div>
  </div>

);


}



export default Main;