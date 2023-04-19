import  * as helper  from "../../helpers/helpers";
import key from '../../key/key.json';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './sidebar.css';
import NavLinks from './Links';


function Sidebar(props) {



	function reset() {
		localStorage.removeItem('theme');
		localStorage.removeItem('theme-color');
		window.location.replace("/")

	}

	useEffect(() => {
		
	},[]);

	return (
		<div style={{backgroundColor: props.background, boxShadow: "1px 1px 23px 0px " + props.neon}}   className={'sidebar position-fixed d-none d-lg-block'}>
			<div className="Logo p-3">
				<a className="navbar-brand" href="/">
					<h2 className="text-center text-light">{key.title}</h2>
				</a>
			</div>

			<ul class="nav flex-column navbar-dark">
				<NavLinks  path="/" name="HOME" />
				<NavLinks  path="/draft" name="DRAFT HISTORY" />
				<NavLinks  path="/overall" name="OVERALL" />
				<NavLinks  path="/stats" name="STATS" />
				<NavLinks  path="/hall-of-fame" name="HALL OF FAME" />
				<NavLinks  path="/nflTeams" name="NFL TEAMS" />
			</ul>

			<a
				onClick={reset}
				style={{
					position: 'absolute',
					left: '50%',
					bottom: '20px',
					transform: 'translateX(-50%)',
					cursor:'pointer'
				}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill={props.reset} className="reset-button" viewBox="0 0 16 16">
					<path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z" />
					<path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z" />
				</svg>
			</a>
		</div>
	);
}

export default Sidebar;
