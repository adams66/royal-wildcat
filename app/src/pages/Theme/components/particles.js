import Key from '../../../key/key.json';
import "./particles.css";


function Particles(props) {
	document.documentElement.style.setProperty('--pColor', props.particleColor);
	

	return (
		<div style={{backgroundColor:Key.background}} class="wrapper">
			<div className="particle partical1" />
			<div className="particle partical2" />
			<div className="particle partical3" />
			<div className="particle partical4" />
		</div>
	);
}

export default Particles;
