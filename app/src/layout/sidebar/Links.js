import * as helper from "../../helpers/helpers";
import Key from "../../key/key.json";
import {NavLink} from "react-router-dom";


function click(event){
    if(event.target.style.color !=="white"){
        document.querySelector(".hamburger").classList.remove("clicked");
        document.querySelector(".sidebar").classList.add("d-none");
    }
}





function NavLinks(props){
    let activeStyle = {fontWeight: "bolder",  color: "rgb(102, 16, 242)"};
    let normalStyle = {color: "#fff"}

    

    return(

        <li  class="nav-item text-center">
        <NavLink onClick={click}  style={({ isActive }) =>
              isActive ? activeStyle : normalStyle} className="sidebar-navLink nav-link" to={props.path}><div className="">{props.name}</div> <i className={props.icon } ></i>
              </NavLink>
          </li>

    );


}


export default NavLinks;