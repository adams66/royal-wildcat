import { Key } from '../../key/key.json';
import '../Home/home.css';
import Foundation from '../../layout/Foundation';
import HomeHeader from './homeComponents/HomeHeader';
import HomeGrid from './homeComponents/HomeGrid';
import Button from '../../layout/components/Button/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeIconGrid from './homeComponents/HomeIconGrid';

function Home() {
	const [ royal, SetRoyal ] = useState(1);

	useEffect(() => {
		var theme = localStorage.getItem('theme');

		if (theme) {
			switch (theme) {
				case 'wildcat':
					
					break;
				case 'chief':
          document.body.style.background = 'black';
          document.querySelector("body").style.color = "black";
          document.querySelector(".navbar-top").style.background = "#E31836";
          document.querySelector(".sidebar").style.background = "#E31836";
					document.body.style.background = '#eeeeee';
					break;
				case 'shocker':
          document.body.style.background = '#ffffff';
					break;
			}
		}
	}, []);

	return (
		<Foundation>
			<HomeHeader />
			<HomeGrid theme={royal} />

			<HomeIconGrid />
		</Foundation>
	);
}

export default Home;
