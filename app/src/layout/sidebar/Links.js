import * as helper from "../../helpers/helpers";
import Key from "../../key/key.json";
import {NavLink} from "react-router-dom";



function NavLinks(props){
    let activeStyle = {

        fontWeight: "bolder",
        color: helper.themeColor(Key, "color")
      };
    let normalStyle = {

        color: "#fff"
    }

    function click(event){
        if(event.target.style.color !=="white"){
            document.querySelector(".hamburger").classList.remove("clicked");
            document.querySelector(".sidebar").classList.add("d-none");
        }
    }



    return(

        <li  class="nav-item text-center">
        <NavLink onClick={click}  style={({ isActive }) =>
              isActive ? activeStyle : normalStyle} className="sidebar-navLink nav-link" to={props.path}>{props.name}</NavLink>
          </li>

    );


}


export default NavLinks;