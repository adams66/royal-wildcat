import key from "../../key/key.json"
import React, { useEffect, useState } from "react";
import './sidebar.css';
import NavLinks from './Links';






function Sidebar() {
	useEffect(() => {
		var sidebar = document.querySelector(".sidebar");

	
	  },[])


	  var color = "0 0 15px" +" " + key.buttons;
	return (
		<div style={{backgroundColor: key.background, borderRightWidth:"1px", borderRightColor: key.buttons, boxShadow: color}} className="sidebar position-fixed d-none d-md-block">
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
		</div>
	);
}

export default Sidebar;