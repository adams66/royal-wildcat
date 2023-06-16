import Key from "../../key/key.json";
import  * as helper  from "../../helpers/helpers";
import { useEffect } from "react";
import { useState } from "react";
import "./navbar.css";


function Navbar(props){
	const [sidebar,setSidebar] = useState();
	const [year,setYear] = useState();

	return (

		<div style={{position:"sticky",top:"0", left: "0",right:"0", zIndex:"1000", boxShadow: "15px 0px 23px 0px " + props.neon}} className={"d-flex align-items-center navbar-top background "}>
			<div onClick={props.hamburgerFunction}  className={props.hamburgerClass} >
				<div className ="position-relative h-100">
				<div className="line lineA rounded"></div>
				<div className="line lineB rounded"></div>
				<div className="line lineC rounded"></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
