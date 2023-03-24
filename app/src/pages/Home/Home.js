
import '../Home/home.css';
import  * as helper  from "../../helpers/helpers";
import Foundation from '../../layout/Foundation';
import HomeHeader from './homeComponents/HomeHeader';
import HomeGrid from './homeComponents/HomeGrid';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeIconGrid from './homeComponents/HomeIconGrid';
import { queryHelpers } from '@testing-library/react';

function Home(props) {
	const [ royal, SetRoyal ] = useState(1);

	useEffect(() => {
		helper.windowReset();
	}, []);

	return (
		<Foundation>
			<HomeHeader />
			<HomeGrid cards={props.cards}  />
			<HomeIconGrid />
		</Foundation>
	);
}

export default Home;
