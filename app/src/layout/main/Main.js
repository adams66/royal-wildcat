import Navbar from "../navbar/Navbar";
import  * as helper  from "../../helpers/helpers";
import key from '../../key/key.json';
import "./main.css";



function Main(props){
return(

  <div style={{backgroundColor: props.background}} className="container-fluid p-0 ">
  <div  className="main ">
  <Navbar hamburgerFunction={props.hamburgerFunction} hamburgerClass={props.hamburgerClass} hamburger={props.hamburger} neon ={props.neon} background={props.navbar} />
     {props.children}
  </div>
  </div>

);
}



export default Main;