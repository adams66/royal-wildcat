import key from "../../key/key.json"
import React, { useEffect, useState } from "react";
import './sidebar.css';
import NavLinks from './Links';


function reset(){
localStorage.removeItem("theme");
window.location.href = "/"
}






function Sidebar() {
	const [theme, setTheme] = useState();



	useEffect(() => {
	var getTheme = localStorage.getItem("theme");
	
		switch(getTheme){
		case "wildcat":
		setTheme("sidebar-wildcat");
		break;
		case "chief":
		setTheme("sidebar-chief");
		break;
		case "jayhawk":
		setTheme("sidebar-jayhawk");
        break;


		}


	
	  },[])



	return (
		<div style={{backgroundColor: key.background}} className={theme + " sidebar position-fixed d-none d-md-block"}>
			<div className="Logo p-3">
				<a className="navbar-brand" href="/">
					<h2 className="text-center text-light">Royal Wildcat</h2>
				</a>
			</div>

			<ul class="nav flex-column navbar-dark">
			    <NavLinks path="/"        name="Home" />
			    <NavLinks path="/draft"   name="Draft History" />
				<NavLinks path="/overall" name="Overall" />
				<NavLinks path="/hall-of-fame" name="Hall of Fame" />
			</ul>

			<button onClick={reset} style={{position: "absolute", left: "50%", bottom: "30px"}}>Reset</button>
		</div>
	);
}

export default Sidebar;