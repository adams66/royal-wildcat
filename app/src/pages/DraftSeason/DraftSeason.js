import * as helper from '../../helpers/helpers';
import Key from '../../key/key.json';
import React, { useEffect, useState } from 'react';
import './draftSeason.css';
import Foundation from '../../layout/Foundation';
import Circle from './componets/Circle';

function DraftSeason(props) {
	const [ width, setWidth ] = useState(window.innerWidth);
	const [ draft, setDraft ] = useState([]);
	const [ round, setRound ] = useState(1);
	const [ theme, setTheme ] = useState();

	const fetchData = (year, round) => {
		return fetch('https://homebase.dal-10.com/public/draft/season/' + year + '/' + round)
			.then((response) => response.json())
			.then((data) => {
				setDraft(data);
			});
	};

	useEffect((year) => {
		var url = window.location.href.split('/');
		var year = url[4];
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

	function componentWillMount() {
		window.addEventListener('resize', handleWindowSizeChange);
	}

	componentWillMount();

	function nflTeam(team) {
        console.log(team)
		switch (team) {
            case "0" :
            return "";
			case "1":
				return 'https://homebase.dal-10.com/nfl_logos/arizona_cardinals.svg';
		
			case "2":
				return 'https://homebase.dal-10.com/nfl_logos/atlanta_falcons.svg';
		
			case "3":
				return 'https://homebase.dal-10.com/nfl_logos/carolina_panthers.svg';
		
			case "4":
				return 'https://homebase.dal-10.com/nfl_logos/chicago_bears.svg';
			
			case "5":
				return 'https://homebase.dal-10.com/nfl_logos/dallas_cowboys.svg';
		
			case "6":
				return 'https://homebase.dal-10.com/nfl_logos/detriot_lions.svg';
			
			case "7":
				return 'https://homebase.dal-10.com/nfl_logos/green_bay_packers.svg';
		
			case "8":
             
				return 'https://homebase.dal-10.com/nfl_logos/los_angeles_rams.svg';
		
			case "9":
				return 'https://homebase.dal-10.com/nfl_logos/minnesota_vikings.svg';
		
			case "10":
				return 'https://homebase.dal-10.com/nfl_logos/new_orleans_saints.svg';
		
			case "11":
				return 'https://homebase.dal-10.com/nfl_logos/new_york_giants.svg';
			
			case "12":
				return 'https://homebase.dal-10.com/nfl_logos/philadelphia_eagles.svg';
		
			case "13":
				return 'https://homebase.dal-10.com/nfl_logos/san_francisco_49ers.svg';
		
			case "14":
				return 'https://homebase.dal-10.com/nfl_logos/seattle_seahawks.svg';
			
			case "15":
				return 'https://homebase.dal-10.com/nfl_logos/tampa_bay_buccaneers.svg';
			
			case "16":
				return 'https://homebase.dal-10.com/nfl_logos/washington_commanders.svg';
		
			case "17":
				return 'https://homebase.dal-10.com/nfl_logos/baltimore_ravens.svg';
		
			case "18":
				return 'https://homebase.dal-10.com/nfl_logos/buffalo_bills.svg';
		
			case "19":
				return 'https://homebase.dal-10.com/nfl_logos/cincinnati_bengals.svg';
		
			case "20":
				return 'https://homebase.dal-10.com/nfl_logos/cleveland_browns.svg';
			
			case "21":
				return 'https://homebase.dal-10.com/nfl_logos/denver_broncos.svg';
			
			case "22":
				return 'https://homebase.dal-10.com/nfl_logos/houston_texans.svg';
		
			case "23":
				return 'https://homebase.dal-10.com/nfl_logos/indianapolis_colts.svg';
		
			case "24":
				return 'https://homebase.dal-10.com/nfl_logos/jacksonville_jaguars.svg';
			
			case "25":
				return 'https://homebase.dal-10.com/nfl_logos/kansas_city_chiefs.svg';
				break;
			case "26":
				return 'https://homebase.dal-10.com/nfl_logos/las_vegas_raiders.svg';
		
			case "27":
				return 'https://homebase.dal-10.com/nfl_logos/miami_dolphins.svg';
			
			case "28":
				return 'https://homebase.dal-10.com/nfl_logos/new_england_patriots.svg';
			
			case "29":
				return 'https://homebase.dal-10.com/nfl_logos/new_york_jets.svg';
			
			case "30":
				return 'https://homebase.dal-10.com/nfl_logos/pittsburgh_steeler.svg';
			
			case "31":
				return 'https://homebase.dal-10.com/nfl_logos/tennessee_titans.svg';
			

			case "32":
				return 'https://homebase.dal-10.com/nfl_logos/los_angeles_chargers.svg';
			


		}
	}

	if (width >= 700) {
		return (
			<Foundation>
				<table className="table m-3 ">
					<thead style={{ background: 'rgb(16, 17, 22)' }}>
						<tr className="text-light">
							<th class="text-center d-none d-md-table-cell" scope="col">Round</th>
							<th class="text-center d-none d-md-table-cell" scope="col">Round Number</th>
							<th class="text-center" scope="col">Overall</th>
							<th class="text-center" scope="col">Player Name</th>
							<th class="text-center" scope="col">Fantasy Player</th>
							<th class="text-center" scope="col">Position</th>
							<th class="text-center" scope="col">NFL</th>
							<th class="text-center" scope="col">College</th>
						</tr>
					</thead>
					<tbody style={{ background: 'rgb(16, 17, 22)' }} className="text-light">
						{draft &&
							draft.length > 0 &&
							draft.map((userObj, index) => (
								<tr className={theme}>
									<th className="align-middle d-none d-md-table-cell" scope="row">
										<div className="text-center fw-bold">{userObj.overall_round}</div>
									</th>
									<td className="align-middle d-none d-md-table-cell">
										<div className="text-center align-middle fw-bold">{userObj.round_pick}</div>
									</td>
									<td className="align-middle ">
										<div className="text-center fw-bold">{userObj.overall_pick}</div>
									</td>
									<td className="align-middle">
										<div className="text-center">{userObj.player_name}</div>
									</td>
									<td className="align-middle">
										<div className="text-center">{userObj.fantasy_player}</div>
									</td>
									<td className="align-middle">
										<div className="text-center">
											<Circle position={userObj.position} />
										</div>
									</td>
									<td className="align-middle">
										<div className="text-center">
											<img style={{width: "50px"}} src={nflTeam(userObj.nfl)} />
										</div>
									</td>

									<td className="align-middle">
										<div className="text-center">{userObj.college}</div>
									</td>
								</tr>
							))}{' '}
					</tbody>
				</table>
				<nav aria-label="Page navigation example ">
					<ul className="pagination d-flex justify-content-center">
						<li className="page-item m-1">
							<a
								onClick={(event) => page(draft, round, 'Previous')}
								style={
									round == 1 ? { background: 'red' } : { background: helper.themeColor(Key, 'color') }
								}
								className={theme + ' pageChanger btn  text-light'}
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
										{ background: 'red' }
									) : (
										{ background: helper.themeColor(Key, 'color') }
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
				{draft &&
					draft.length > 0 &&
					draft.map((userObj, index) => (
						<div
							style={{ borderWidth: '2px', borderColor: 'grey', borderStyle: 'solid' }}
							className="row pt-2 m-2 rounded"
						>
							<div className="col-9 d-flex flex-column ">
                            <img style={{width: "50px"}} src={nflTeam(userObj.nfl)} />
								<div className="text-light">Round: {userObj.overall_round}</div>
								<div className="text-light">Overall: {userObj.overall_pick}</div>
								<h6 className="text-light">{userObj.player_name}</h6>
								<h6 className="text-light">{userObj.fantasy_player}</h6>
							</div>
							<div className="col-2 d-flex align-items-center justify-content-end">
								<Circle position={userObj.position} />
            
							</div>
						</div>
					))}

				<nav aria-label="Page navigation example ">
					<ul className="pagination d-flex justify-content-center">
						<li className="page-item m-1">
							<a
								onClick={(event) => page(draft, round, 'Previous')}
								style={
									round == 1 ? { background: 'red' } : { background: helper.themeColor(Key, 'color') }
								}
								className={theme + ' pageChanger btn  text-light'}
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
										{ background: 'red' }
									) : (
										{ background: helper.themeColor(Key, 'color') }
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
	}
}

export default DraftSeason;
