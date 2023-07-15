import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Foundation from '../../layout/Foundation';
import './NflTeams.css';

function NflTeams() {
	const [view, setView] = useState(0);
	const [ width, setWidth ] = useState(window.innerWidth);
	const [ teams, setTeams ] = useState([]);

	function createMarkup(svg) {
		return { __html: svg };
	}

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	function componentWillMount() {
		window.addEventListener('resize', handleWindowSizeChange);
	}

	componentWillMount();

	const fetchData = () => {
		return fetch('https://homebase.dal-10.com/nfl').then((response) => response.json()).then((data) => {
			setTeams(data);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);


	if(view == 0){



	return (
		<Foundation>

			<div style={{height:"100px", }} className='row m-1 m-md-3 text-light text-center d-flex justify-content-center align-items-center'>
				<div className='col'>
				<h1>NFL TEAMS</h1>
				</div>
				</div>
			<div className="row m-1 m-md-3">
				{teams &&
					teams.length > 0 &&
					teams.map((userObj, index) => (
						<div className="col-12 col-md-6 col-lg-3 p-0">
							<div
								className="card p-0 p-md-2 round m-2 m-md-3 "
								style={{
									backgroundColor: '#101116',
								}}
							>

<NavLink
										style={{ textDecoration: 'none' }}
										className="text-light"
										to={'/nflTeams/' + userObj.team_url}
									>
								<div className="card-body d-flex flex-column align-items-center">
			
									<img 
										className=" mb-4 d-block"
										style={{ display: 'block' }}
										width="100px"
										height="100px"
										src={'https://homebase.dal-10.com/nfl_logos/' + userObj.logo}
									/>


										<h5 className="card-title text-light font-bold text-center">{userObj.team}</h5>
								
								</div>
								</NavLink>
							</div>
						</div>
					))}
			</div>
		</Foundation>
	);

}

if(view == 1){



	if (width >= 700 && teams !== []) {
		return (
			<Foundation>
				<table className="table m-3 ">
					<thead style={{background: "rgb(16, 17, 22)"}} className="">
						<tr className="text-light">
							<th class="text-center d-none d-md-table-cell" scope="col">
								Team
							</th>
							<th class="text-center" scope="col">
								Year Established
							</th>
							<th class="text-center" scope="col">
								Logo
							</th>
						</tr>
					</thead>
					<tbody style={{background: "rgb(16, 17, 22)"}}>
						{teams &&
							teams.length > 0 &&
							teams.map((userObj, index) => (
								<tr style={{ color: 'white' }} className="">
									<td className="align-middle d-none d-md-table-cell">
										<div className="text-center align-middle">
											{
												<NavLink
													style={{ textDecoration: 'none' }}
													className="text-light"
													to={'/nflTeams/' + userObj.team_url}
												>
													{userObj.team}
												</NavLink>
											}
										</div>
									</td>
									<td className="align-middle ">
										<div className="text-center">{userObj.established_year}</div>
									</td>

									<td className="align-middle">
										<img style={{display: "block",opacity: 1, width: "50px", marginLeft: "auto", marginRight: "auto"}} src={"https://homebase.dal-10.com/nfl_logos/" + userObj.logo} />

									</td>
								</tr>
							))}
					</tbody>
				</table>
			</Foundation>
		);
	} else if(width <= 700 && teams !==[]) {
		return (
			<Foundation>
				{teams &&
					teams.length > 0 &&
					teams.map((userObj, index) => (
						<div
							style={{ borderWidth: '2px', borderColor: 'grey', borderStyle: 'solid', color: 'white' }}
							className="row pt-3 pb-3 m-2 rounded"
						>

							<div className="col-9 d-flex flex-column">
							<NavLink
													style={{ textDecoration: 'none' }}
													className="text-light"
													to={'/nflTeams/' + userObj.team_url}
												>
								<h6 className="text-light">{userObj.team}</h6>
								</NavLink>
								<h2>{userObj.established_year}</h2>
							</div>
							<img style={{display: "block",opacity: 1, width: "70px", marginLeft: "auto", marginRight: "auto"}} src={"https://homebase.dal-10.com/nfl_logos/" + userObj.logo} />

						</div>
					))}
			</Foundation>
		);
	}

	else{
		return(
		<Foundation>
			<h1>Loading</h1>

		</Foundation>
		)
	}

}
}



export default NflTeams;
