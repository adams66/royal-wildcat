import "./button.css";
import { Link } from "react-router-dom";




function Button(props){

    var buttomTheme = props.buttonTheme;
    var button = buttomTheme + " btn text-light";
    var cssClass;
    


switch(buttomTheme){

case "wildcat":
cssClass ="btn-wildcat";
break;
case "chief":
cssClass ="btn-chief";
break;
case "jayhawk":
cssClass ="btn-jayhawk";
break;


}

var added = cssClass + " btn text-light"; 



 if(props.app == "true"){
    return(
<Link className={added} to={props.href}>{props.content}</Link>
    )


 } 
 
 else{
    return(
        <a  href={props.href} className={added}>
        {props.content}
    </a>
    )

 }



}



export default Button;