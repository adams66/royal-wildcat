import Key from "../../key/key.json";
import  * as helper  from "../../helpers/helpers";
import { useEffect } from "react";
import { useState } from "react";
import "./navbar.css";






function Navbar(props){
	const [hamburger, setHamburger] = useState(0);
	const [hamburgerClass, setHamburgerClass] = useState("hamburger d-block d-lg-none")
	const [theme, setTheme] = useState();
	const [year,setYear] = useState();
	var bgc = Key.background;


	function hamburgerFunction(){
	if(hamburger == 0){
		setHamburger(1);
		setHamburgerClass("hamburger d-block d-lg-none clicked");
	}
	
	else{
		setHamburger(0);
		setHamburgerClass("hamburger d-block d-lg-none");
	}
}

	return (

		<div style={{position:"sticky",top:"0", left: "0",right:"0", zIndex:"1000", backgroundColor: props.background, boxShadow: "15px 0px 23px 0px " + props.neon}} className={"d-flex align-items-center navbar-top "}>
			<div onClick={hamburgerFunction}  className={hamburgerClass} >
				<div className ="position-relative h-100">
				<div className="line lineA rounded"></div>
				<div className="line lineB rounded"></div>
				<div className="line lineC rounded"></div>
				</div>
			</div>

		<div className="text-light" style={{position:"absolute", right: "20px", top:"20px"}}><h4>{year}</h4></div>

		</div>
	);
};

export default Navbar;
