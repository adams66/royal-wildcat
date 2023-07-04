import Navbar from '../navbar/Navbar';
import * as helper from '../../helpers/helpers';
import key from '../../key/key.json';
import './main.css';

function Main(props) {
	return (
		<div style={{height: "100%" }} className="container-fluid p-0 background">
			<div className="main">
				<Navbar
					hamburgerFunction={props.hamburgerFunction}
					hamburgerClass={props.hamburgerClass}
					hamburger={props.hamburger}
			
					background={props.navbar}
				/>


				{props.children}
			</div>
		</div>
	);
}

export default Main;
