import Key from "../../key/key.json";
import { useEffect } from "react";
import "./navbar.css";



function hamburgerFunction(event){
var realHamburger = document.querySelector(".hamburger");
var checkHam = realHamburger.classList.contains("clicked");
var	sideBar = document.querySelector(".sidebar");
var	sideBarH = document.querySelector(".sidebar h2");
if(!checkHam){
sideBarH.style.display = "none";
sideBar.classList.remove("d-none");
sideBar.classList.add("d-flex");
sideBar.classList.add("flex-column");
sideBar.classList.add("justify-content-center");
sideBar.style.width = "100%";
sideBar.style.height ="100%";


	realHamburger.classList.add("clicked");

}

else{
	sideBarH.style.display = "block";
	sideBar.classList.add("d-none");
	sideBar.classList.remove("d-flex");
    sideBar.classList.remove("flex-column");
    sideBar.classList.remove("justify-content-center");
	sideBar.style.background = "init";
	sideBar.style.width = "init";
	sideBar.style.height ="init";	
	realHamburger.classList.remove("clicked");
}




}












const Navbar = () => {
	useEffect(() =>{
		var hamburger = document.querySelector(".hamburger");
		hamburger.addEventListener("click", hamburgerFunction);
		
	
	
	
	});
	var color = "0 0 15px" +" " + Key.buttons;

	return (

		<div style={{borderBottomWidth: "1px",borderBottomColor: Key.buttons, boxShadow: color }} className="navbar-top d-flex align-items-center">
			<div className="hamburger d-block d-md-none">
				<div className ="position-relative h-100">
				<div className="line lineA"></div>
				<div className="line lineB"></div>
				<div className="line lineC"></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
