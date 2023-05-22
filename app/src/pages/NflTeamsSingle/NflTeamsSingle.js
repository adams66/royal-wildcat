import '../Home/home.css';
import Key from '../../key/key.json';
import  * as helper  from "../../helpers/helpers";
import Foundation from '../../layout/Foundation';




function NflTeamsSingle(props) {

	var url = window.location.pathname.split("/");

	console.log(url);
	


	return (
		<Foundation>
                <h1 className='text-light text-center'>{url[2]}</h1>
		</Foundation>
	);
}

export default NflTeamsSingle;
