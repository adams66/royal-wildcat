import {Link} from "react-router-dom";



function NavLinks(props){
var color = props.active == true ? "rgb(102,16,242)" : "white";

    function click(event){
        if(event.target.style.color !=="white"){
            document.querySelector(".hamburger").classList.remove("clicked");
            document.querySelector(".sidebar").classList.add("d-none");
            console.log("checking")
        }
    }



    return(

        <li  class="nav-item text-center">
        <Link onClick={click}  style={{color: color}} className="sidebar-navLink nav-link" to={props.path}>{props.name}</Link>
          </li>

    );


}


export default NavLinks;