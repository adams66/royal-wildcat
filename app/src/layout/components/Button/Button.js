import "./button.css";
import { Link } from "react-router-dom";




function Button(props){

 if(props.app == "true"){
    return(
<Link className={props.className} to={props.href}>{props.content}</Link>
    )


 } 
 
 else{
    return(
        <a  href={props.href} className="btn btn-wildcat text-light">
        {props.content}
    </a>
    )

 }



}



export default Button;