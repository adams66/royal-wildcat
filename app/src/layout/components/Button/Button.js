import "./button.css";
import { Link } from "react-router-dom";




function Button(props){


    return(
<Link style={{backgroundColor: "red", color: "#fff"}} className="btn" to={props.href}>{props.content}</Link>
    );

 
 




}



export default Button;