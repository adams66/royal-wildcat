import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Foundation from '../../layout/Foundation';
import './NflTeams.css';
import Loading from '../../layout/loading/Loading';

function NflTeams() {
	const [ load,  setLoad] = useState(false);
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
			setLoad(true)
			setTeams(data);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	if(load == false){
		return(
			<Foundation>
				<Loading />
			</Foundation>
		)
	}

	else{
	return (
		<Foundation>
			<div style={{height:"80px", }} className='row m-1 m-md-3 text-light text-center d-flex justify-content-center align-items-center'>
				<div className='col'>
				<h1>NFL TEAMS</h1>
				</div>
				</div>
			<div className="row m-1 m-md-3">
				{teams && teams.length > 0 && teams.map((userObj, index) => (
						<div className="col-12 col-md-6 col-lg-3 p-0">
							<div style={{overflow:"hidden", position:"relative",backgroundColor: userObj.color}} className="card p-0 p-md-2 round m-2 m-md-3"  >
								<div  className="card-body d-flex align-items-center justify-content-between">
								<img className="d-block" style={{ display: 'block' }}  width="70px" height="70px" src={'https://homebase.dal-10.com/nfl_logos/' + userObj.logo}/>
								<img className=" d-block" style={{position:"absolute", left:"-%",top:"-70%",opacity:"0.15", zIndex:"-1" }}  width="400px" height="400px" src={'https://homebase.dal-10.com/nfl_logos/' + userObj.logo}/>
								<h5 className="card-title text-light font-bold text-center m-0">{userObj.team}</h5>
								{/* <p className='text-light'> {userObj.conference == 1 ? "NFC" : "AFC"}</p> */}
								</div>
							
							</div>
							
						</div>
					))}
			</div>
		</Foundation>
	
	);
				}
}


export default NflTeams;
