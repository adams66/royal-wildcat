import Key from '../../key/key.json';
import * as helper from '../../helpers/helpers';
import { useEffect } from 'react';
import { useState } from 'react';
import './navbar.css';
import Hamburger from '../hamburger/Hamburger';

function Navbar(props) {


	return (
		<div className={'d-flex align-items-center justify-content-end navbar-top background'} >
			<Hamburger hamburgerFunction={props.hamburgerFunction} hamburgerClass={props.hamburgerClass} />

		</div>
	);
}

export default Navbar;
