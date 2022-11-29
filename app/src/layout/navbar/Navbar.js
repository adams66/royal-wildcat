import Key from "../../key/key.json";
import { useEffect } from "react";
import { useState } from "react";
import "./navbar.css";



function hamburgerFunction(event){
var realHamburger = document.querySelector(".hamburger");
var checkHam = realHamburger.classList.contains("clicked");
var	sideBar = document.querySelector(".sidebar");
var	sideBarH = document.querySelector(".sidebar h2");
if(!checkHam){
sideBarH.style.display = "none";
sideBar.classList.remove("d-none");
sideBar.classList.add("clicked");
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
	sideBar.classList.remove("clicked");
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
	const [theme, setTheme] = useState();
	const [year,setYear] = useState();


	useEffect(() =>{
		var hamburger = document.querySelector(".hamburger");
		hamburger.addEventListener("click", hamburgerFunction);
		var getTheme = localStorage.getItem("theme");
		var url = window.location.href.split("/");
        var year = url[5];
		setYear(year);
	
		switch(getTheme){
		case "wildcat":
		setTheme("navbar-top-wildcat");
		break;
		case "chief":
		setTheme("navbar-top-chief");
		break;
		case "jayhawk":
		setTheme("navbar-top-jayhawk");
        break;


		}
	
	
	
	});
	var color = "0 0 15px" +" " + Key.buttons;

	return (

		<div className={ theme + " d-flex align-items-center"}>
			<div className="hamburger d-block d-lg-none">
				<div className ="position-relative h-100">
				<div className="line lineA"></div>
				<div className="line lineB"></div>
				<div className="line lineC"></div>
				</div>
			</div>

		<div className="text-light" style={{position:"absolute", right: "20px", top:"15px"}}><h2>{year}</h2></div>

		</div>
	);
};

export default Navbar;