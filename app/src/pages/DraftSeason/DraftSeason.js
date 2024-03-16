import * as helper from '../../helpers/helpers';
import Key from '../../key/key.json';
import React, { useEffect, useState } from 'react';

import './draftSeason.css';
import Foundation from '../../layout/Foundation';
import Circle from './componets/Circle/Circle';
import Draft_Table from './componets/Table/Draft_Table';


function DraftSeason(props) {
	const [ width, setWidth ] = useState(window.innerWidth);
	const [ draft, setDraft ] = useState([]);
	const [ round, setRound ] = useState(1);
	const [ theme, setTheme ] = useState();
	const [ Load,  SetLoad  ] = useState(false);
 
	const fetchData = (year, round) => {
		return fetch('https://homebase.dal-10.com/public/draft/season/' + year + '/' + round)
			.then((response) => response.json())
			.then((data) => {
				SetLoad(true);
				setDraft(data);
			});
	};

	function componentWillMount() {
		window.addEventListener('resize', handleWindowSizeChange);
	}


	useEffect((year) => {
		document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#000000');
		var url = window.location.href.split('/');
		var year = url[4];
		componentWillMount();
		fetchData(year, round);

	}, []);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	function page(draft, round, event) {
		if (event == 'Next' && round < 16) {
			var url = window.location.href.split('/');
			var year = url[4];
			setRound(round + 1);
			fetchData(year, round + 1);
			helper.windowReset();
		} else if (event == 'Previous' && round > 1) {
			var url = window.location.href.split('/');
			var year = url[4];

			setRound(round - 1);
			fetchData(year, round - 1);
			helper.windowReset();
		} else {
		}
	}


	function nflTeam(team) {
		var url = "https://homebase.dal-10.com/nfl_logos/";

		switch (team) {
            case "0" :  return '';
			case "1" :  return url + 'arizona_cardinals.svg';
			case "2" :  return url + 'atlanta_falcons.svg';
			case "3" :  return url + 'carolina_panthers.svg';
			case "4" :  return url + 'chicago_bears.svg';
			case "5" :  return url + 'dallas_cowboys.svg';
			case "6" :  return url + 'detriot_lions.svg';
			case "7" :  return url + 'green_bay_packers.svg';
			case "8" :  return url + 'los_angeles_rams.svg';
			case "9" :  return url + 'minnesota_vikings.svg';
			case "10":  return url + 'new_orleans_saints.svg';
			case "11":  return url + 'new_york_giants.svg';	
			case "12":  return url + 'philadelphia_eagles.svg';
			case "13":  return url + 'san_francisco_49ers.svg';
			case "14":  return url + 'seattle_seahawks.svg';
			case "15":  return url + 'tampa_bay_buccaneers.svg';
			case "16":  return url + 'washington_commanders.svg';
			case "17":  return url + 'baltimore_ravens.svg';
			case "18":  return url + 'buffalo_bills.svg';
			case "19":  return url + 'cincinnati_bengals.svg';
			case "20":  return url + 'cleveland_browns.svg';
			case "21":  return url + 'denver_broncos.svg';
			case "22":  return url + 'houston_texans.svg';
			case "23":  return url + 'indianapolis_colts.svg';
			case "24":  return url + 'jacksonville_jaguars.svg';
			case "25":  return url + 'kansas_city_chiefs.svg';
			case "26":  return url + 'las_vegas_raiders.svg';
			case "27":  return url + 'miami_dolphins.svg';
			case "28":  return url + 'new_england_patriots.svg';
			case "29":  return url + 'new_york_jets.svg';
			case "30":  return url + 'pittsburgh_steeler.svg';
			case "31":  return url + 'tennessee_titans.svg';
			case "32":  return url + 'los_angeles_chargers.svg';
		}
	}

	if(width >= 700) {
		return (
			<Foundation>
				<Draft_Table data={draft} />
				<nav aria-label="Page navigation example ">
					<ul className="pagination">
						<li className="page-item m-1">
							<a
								onClick={(event) => page(draft, round, 'Previous')}
								style={
									round == 1 ? { background: 'rgb(102, 16, 242)' } : { background: "rgb(102, 16, 242)"}
								}
								className='pageChanger btn  text-light'
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="currentColor"
									class="bi bi-arrow-left-short"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
									/>
								</svg>
							</a>
						</li>
						<li className="page-item m-1">
							<a
								onClick={(event) => page(draft, round, 'Next')}
								style={
									round == draft.rounds ? (
										{ background: 'rgb(102, 16, 242)' }
									) : (
										{ background: "rgb(102, 16, 242)" }
									)
								}
								className={theme + ' pageChanger btn text-light'}
							>
								<svg
									id="Next"
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="currentColor"
									class="bi bi-arrow-right-short"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
									/>
								</svg>
							</a>
						</li>
					</ul>
				</nav>
			</Foundation>
		);
	} else {
		return (
			<Foundation>
				<div style={{color:"white"}}>Round {round}</div>



				{draft &&
					draft.length > 0 &&
					draft.map((userObj, index) => (
						<div
							style={{ borderWidth: '2px', borderColor: 'grey', borderStyle: 'solid' }}
							className="row pt-2 m-2 rounded"
						>
							<div className="col-7 d-flex flex-column ">
								<div className="text-light">Round: {userObj.overall_round}</div>
								<div className="text-light">Overall: {userObj.overall_pick}</div>
								<h6 className="text-light">{userObj.player_name}</h6>
								<h6 className="text-light">{userObj.fantasy_player}</h6>
							</div>
							<div className="col-5 d-flex align-items-center">
							<img style={{width: "50px"}} src={nflTeam(userObj.nfl)} />
								<Circle position={userObj.position} />
            
							</div>
						</div>
					))}

				<nav className='mobile'>
					<ul className="pagination d-flex justify-content-between align-items-center m-0 h-100 ">
						<li className="page-item m-1">
						<button className='btn btn-primary' onClick={(event) => page(draft, round, 'Previous')}>Previous </button>
		
					   </li>
						<li className="page-item m-1">
							<button className='btn btn-primary' onClick={(event) => page(draft, round, 'Next')}>Next </button>
						</li>
					</ul>
				</nav>
			</Foundation>
		);
	}
}

export default DraftSeason;
