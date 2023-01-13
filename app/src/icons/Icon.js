import "bootstrap-icons/font/bootstrap-icons.css";

export default function Icon(props) {
var size = (props.hasOwnProperty("size")) ? props.size : "30px" ;
var color = (props.hasOwnProperty("color")) ? props.color : "red";
var icon = (props.hasOwnProperty("icon")) ? props.icon : "bi bi-sign-stop-fill";


return(
    <i style={{fontSize: size, color:color}} className={icon}></i>
)


}


