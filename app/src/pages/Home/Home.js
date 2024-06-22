import '../Home/home.css';
import  * as helper  from "../../helpers/helpers";
import Foundation from '../../layout/Foundation';
import HomeHeader from './homeComponents/HomeHeader';
import HomeGrid from './homeComponents/HomeGrid';
import { useEffect } from 'react';


function Home(props) {
	useEffect(() => {
		document.querySelector('meta[name="theme-color"]').setAttribute('content',  'rgb(16, 17, 22)');

		helper.windowReset();
	}, []);

	return (
		<Foundation>
			<HomeHeader cards={props.cards} />
			<HomeGrid cards={props.cards}  />
		</Foundation>
	);
}

export default Home;
