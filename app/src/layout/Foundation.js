import * as helper from '../helpers/helpers';
import key from '../key/key.json';
import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import NavBar from './navbar/Navbar';
import Main from './main/Main';
import Footer from './Footer/Footer';
import { useEffect } from 'react';

function Foundation(props) {
	const [ theme, setTheme]     = useState([0]);
	const [sidebar, setSidebar]  = useState([0]);
	const [nav, setNav]          = useState([0]);
	const [neon, setNeon]        = useState([0]);
	const [ cards, setCards ]    = useState([0]);
	const [ reset, setReset ]    = useState(0);

	const [hamburger, setHamburger] = useState(0);
	const [hamburgerClass, setHamburgerClass] = useState("hamburger d-block d-xl-none");
	const [sidebarSwitch, setSidebarSwitch] = useState("sidebar position-fixed d-none d-xl-block");
	
	
	function hamburgerFunction(){
		if(hamburger == 0){
			setHamburger(1);
			setHamburgerClass("hamburger d-block d-lg-none clicked");
			setSidebarSwitch("sidebar position-fixed w-100 d-flex flex-column justify-content-center d-lg-block");

		}
		
		else{
			setHamburger(0);
			setHamburgerClass("hamburger d-block d-lg-none");
			setSidebarSwitch("sidebar position-fixed d-none d-lg-block");
		}
	}



	

	useEffect(() => {
		var themeColors = JSON.parse(localStorage.getItem("theme-color"));
		// setButtons(themeColors.buttons);
		setTheme(themeColors.background);
		setCards(themeColors.cards);
		setNav(themeColors.nav);
		setSidebar(themeColors.sidebar);
		setNeon(themeColors.neon);
		setReset(themeColors.reset)
	});

	return (
		<div>
			<Sidebar  reset={reset} neon={neon} background={sidebar} classes={sidebarSwitch} />
			<Main hamburgerFunction={hamburgerFunction} hamburgerClass={hamburgerClass} neon={neon} navbar={nav} background={theme}>
				{props.children}
				<Footer background={theme} />
			</Main>
		</div>
	);
}

export default Foundation;
