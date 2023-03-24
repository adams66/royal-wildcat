import * as helper from '../helpers/helpers';
import key from '../key/key.json';
import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import NavBar from './navbar/Navbar';
import Main from './main/Main';
import Footer from './Footer/Footer';
import { useEffect } from 'react';

function Foundation(props) {
	const [ theme, setTheme ] = useState([ 0 ]);
	const [ button, setButtons ] = useState([ 0 ]);
	const [ cards, setCards ] = useState([ 0 ]);

	useEffect(() => {
		var bgc = helper.themeColor(key, 'backgroundColor');
		var buttons = helper.themeColor(key, 'buttons');
		var cards = helper.themeColor(key, 'cards');
		setButtons(buttons);
		setTheme(bgc);
		setCards(cards);
	});

	return (
		<div>
			<Sidebar background={theme} />
			<Main background={theme}>
				{props.children}
				<Footer background={theme} />
			</Main>
		</div>
	);
}

export default Foundation;
