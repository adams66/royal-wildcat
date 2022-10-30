import key from "../../key/key.json"
import React, { useEffect, useState } from "react";
import './sidebar.css';
import NavLinks from './Links';









function Sidebar() {
	useEffect(() => {
		var sidebar = document.querySelector(".sidebar");
	sidebar.style.backgroundColor = key.background;
	
	  },[])



	return (
		<div className="sidebar position-fixed d-none d-md-block">
			<div className="Logo p-3">
				<a className="navbar-brand" href="/">
					<h2 className="text-center">Royal Wildcat</h2>
				</a>
			</div>

			<ul class="nav flex-column navbar-dark">
			    <NavLinks path="/draft" name="Draft History" />
				<NavLinks path="/overall" name="Overall" />
			</ul>
		</div>
	);
}

export default Sidebar;