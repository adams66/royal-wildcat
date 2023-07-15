import '../Home/home.css';
import Key from '../../key/key.json';
import  * as helper  from "../../helpers/helpers";
import Foundation from '../../layout/Foundation';
import { useEffect,useState } from 'react';




function NflTeamsSingle(props) {
	const [nflTeam, setNflTeam] = useState();


	useEffect(()=>{
	var url = window.location.pathname.split("/");
	var team = url[2];


	fetch("https://homebase.dal-10.com/nfl/team/" + team)
	.then((response)=>{ return response.json()})
	.then((data)=>{setNflTeam(data)});

		console.log(nflTeam);
	},[])



	
if(nflTeam){

	return (
		<Foundation>
						<div style={{height:"100px", }} className='row m-1 m-md-3 text-light text-center d-flex justify-content-center align-items-center'>
				<div className='col'>
				<h1>{nflTeam[0].team}</h1>
				</div>
				</div>



			<div className='row'>

			<div  className='col-12 col-md-6 d-flex justify-content-center align-items-center position-relative'>

				<div className='d-flex justify-content-center align-items-center' style={{background:"white", borderRadius: "50%", width: "100%", maxWidth:"300px", height:"300px",}}>
			<img style={{opacity: "1", display: "block", marginLeft: "auto", marginRight:"auto"}} src={"https://homebase.dal-10.com/nfl_logos/" + nflTeam[0].logo}  />
			</div>
			</div>

			<div className='col-12 col-md-6'>
			<h1 className='text-light text-center'>{"id " + nflTeam[0].id}</h1>
				<h1 className='text-light text-center'>{"Conference " + nflTeam[0].conference}</h1>
				<h1 className='text-light text-center'>{"Year Established " + nflTeam[0].established_year}</h1>
				<h1 className='text-light text-center'>{"Team " + nflTeam[0].team}</h1>
				<h1 className='text-light text-center'><a href={nflTeam[0].website} target="_blank" rel="noopener noreferrer">{nflTeam[0].team}</a></h1>
				<h1 className='text-light text-center'>{"Stadium Name " + nflTeam[0].stadium_name }</h1>
				<h1 className='text-light text-center'>{"Stadium Capacity " + nflTeam[0].stadium_capacity }</h1>
				<h1 className='text-light text-center'>{"Stadium Grass Type " + nflTeam[0].stadium_grass }</h1>
			</div>


			</div>

		</Foundation>
	);



}



	

}

export default NflTeamsSingle;
