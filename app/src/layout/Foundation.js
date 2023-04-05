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
	const [ button, setButtons]  = useState([0]);
	const [ cards, setCards ]    = useState([0]);
	const [ reset, setReset ]    = useState("#fff");

	useEffect(() => {
		var bgc     = helper.themeColor(key, 'backgroundColor');
		var nav     = helper.themeColor(key, 'nav');
		var sidebar = helper.themeColor(key, 'sidebar');
		var neon    = helper.themeColor(key,"neon");
		var buttons = helper.themeColor(key, 'buttons');
		var cards   = helper.themeColor(key, 'cards');
		var reset  = helper.themeColor(key, 'reset');
		setButtons(buttons);
		setTheme(bgc);
		setCards(cards);
		setNav(nav);
		setSidebar(sidebar);
		setNeon(neon);
		setReset(reset)
	});

	return (
		<div>
			<Sidebar reset={reset} neon={neon} background={sidebar} />
			<Main neon={neon} navbar={nav} background={theme}>
				{props.children}
				<Footer background={theme} />
			</Main>
		</div>
	);
}

export default Foundation;
