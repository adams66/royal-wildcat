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
				<img style={{opacity: "1", display: "block", marginLeft: "auto", marginRight:"auto"}} src={"https://homebase.dal-10.com/nfl_logos/" + nflTeam[0].logo}  />
				<h1 className='text-light text-center'>{"id " + nflTeam[0].id}</h1>
				<h1 className='text-light text-center'>{"Conference " + nflTeam[0].conference}</h1>
				<h1 className='text-light text-center'>{"Team " + nflTeam[0].team}</h1>
				<h1 className='text-light text-center'><a href={nflTeam[0].website} target="_blank" rel="noopener noreferrer">{nflTeam[0].team}</a></h1>
		</Foundation>
	);



}



	

}

export default NflTeamsSingle;
