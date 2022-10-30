import {Link} from "react-router-dom";



function NavLinks(props){

    return(

        <li class="nav-item text-center">
        <Link className="nav-link text-light" to={props.path}>{props.name}</Link>
          </li>

    );


}


export default NavLinks;