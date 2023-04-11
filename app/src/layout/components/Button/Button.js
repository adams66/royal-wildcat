import "./button.css";
import { Link } from "react-router-dom";




function Button(props){


    return(
<Link style={{backgroundColor: props.color, color: "#fff"}} className="btn" to={props.href}>{props.content}</Link>
    );

 
 




}



export default Button;