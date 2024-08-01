import * as helper from '../helpers/helpers';
import key from '../key/key.json';
import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import NavBar from './navbar/Navbar';
import Main from './main/Main';
import Footer from './Footer/Footer';
import { useEffect } from 'react';

function Foundation(props) {
	const [hamburger, setHamburger] = useState(0);
	const [hamburgerClass, setHamburgerClass] = useState("hamburger d-block d-xl-none");
	const [sidebarSwitch, setSidebarSwitch] = useState("sidebar position-fixed d-none d-xl-block");
	const [n, setN] = useState(0);


	useEffect(()=>{
		helper.windowReset();
	},[])

	function hamburgerFunction(){
		if(hamburger == 0){
			setHamburger(1);
			document.querySelector('meta[name="theme-color"]').setAttribute('content',  'rgb(16, 17, 22)');

			setHamburgerClass("hamburger d-block d-lg-none clicked");
			setSidebarSwitch("sidebar position-fixed w-100 d-flex flex-column justify-content-center d-lg-block");
		}
		else{
			setHamburger(0);
			document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#000000');

			setHamburgerClass("hamburger d-block d-lg-none");
			setSidebarSwitch("sidebar position-fixed d-none d-lg-block");
		}
	}



	

	useEffect(() => {
		var themeColors = JSON.parse(localStorage.getItem("theme-color"));

	
	});

	return (
		<div> 
			<Sidebar nav={n}classes={sidebarSwitch} />
			<Main hamburgerFunction={hamburgerFunction} hamburgerClass={hamburgerClass}>
				{props.children}
			</Main>
		</div>
	);
}

export default Foundation;
