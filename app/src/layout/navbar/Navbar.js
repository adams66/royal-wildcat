import Key from '../../key/key.json';
import * as helper from '../../helpers/helpers';
import { useEffect } from 'react';
import { useState } from 'react';
import './navbar.css';
import Hamburger from '../hamburger/Hamburger';

function Navbar(props) {
	return (
		<div
			style={{
				position: 'sticky',
				top: '0',
				left: '0',
				right:'0',
		
				zIndex: '1000',
				marginLeft: '10px',
				marginRight: '10px',
				marginTop:'10px'
			}}
			className={'d-flex align-items-center justify-content-end navbar-top background'}
		>
			<Hamburger hamburgerFunction={props.hamburgerFunction} hamburgerClass={props.hamburgerClass} />

		</div>
	);
}

export default Navbar;
