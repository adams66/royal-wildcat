import '../Home/home.css';
import  * as helper  from "../../helpers/helpers";
import Foundation from '../../layout/Foundation';
import HomeHeader from './homeComponents/HomeHeader';
import HomeGrid from './homeComponents/HomeGrid';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeIconGrid from './homeComponents/HomeIconGrid';

function Home(props) {
	useEffect(() => {
		helper.windowReset();
		var themeColor = localStorage.getItem("theme-color")
		console.log(JSON.stringify(themeColor));
		


	}, []);

	return (
		<Foundation>
			<HomeHeader cards={props.cards} />
			<HomeGrid cards={props.cards}  />
			<HomeIconGrid />
		</Foundation>
	);
}

export default Home;
