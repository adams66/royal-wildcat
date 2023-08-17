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

		setCards(themeColors.cards);
		setNav(themeColors.nav);
		setSidebar(themeColors.sidebar);
		setNeon(themeColors.neon);
		setReset(themeColors.reset)
	});

	return (
		<div>
			<Sidebar  reset={reset}   classes={sidebarSwitch} />
			<Main hamburgerFunction={hamburgerFunction} hamburgerClass={hamburgerClass}  navbar={nav}>
				{props.children}
				<Footer />
			</Main>
		</div>
	);
}

export default Foundation;
