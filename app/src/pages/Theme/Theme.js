import { useState } from 'react';
import Key from '../../key/key.json';
import Svg from './components/Svg';
import Particles from './components/particles';

import Icon from '../../icons/Icon';

function Theme() {
	const countTheme = Object.keys(Key.theme).length;

	const [ theme, setTheme ] = useState(1);
	const [ particles, setParticles ] = useState('rgb(102, 16, 242)');

	function rotate(rotate, count, direction) {
		switch (direction) {
			case 'up':
				var countCheckup = theme < count ? setTheme(rotate + 1) : null;

				console.log(rotate + 1);

				switch (rotate + 1) {
					case 1:
						setParticles(Key.theme.wildcat.particles);
						break;
					case 2:
						setParticles(Key.theme.chief.particles);
						break;
					case 3:
						setParticles(Key.theme.shocker.particles);
						break;
					case 4:
						setParticles(Key.theme.jayhawk.particles);
						break;
				}

				break;
			case 'down':
				var countCheckdown = theme > 1 ? setTheme(rotate - 1) : null;

				switch (rotate - 1) {
					case 1:
						setParticles(Key.theme.wildcat.particles);
						break;
				}

				break;
		}
	}

	return (
		<div style={{ overflow: 'hidden' }} className="container-fluid">
			<div style={{ left: '0', right: '0' }} className="row position-fixed ">
				<div className="col p-4">
					<h1 className="text-center text-light">Select a Theme</h1>
				</div>
			</div>

			<div style={{ height: '100vh', overflow: 'hidden' }} className="row">
				<Svg  rotate={theme} />
			</div>





			<div onClick={() => { rotate(theme, countTheme, 'up');
				}}
				style={{ right: '5%', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
				className="position-fixed"
			>
				<Icon color={particles} icon="bi bi-arrow-right-square" size="40px" />
			</div>
			<div onClick={() => { rotate(theme, countTheme, 'down'); }}
				style={{ left: '5%', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
				className="position-fixed"
			>
				<Icon color={particles} icon="bi bi-arrow-left-square" size="40px" />
			</div>

			<Particles particleColor={particles} />
		</div>
	);
}

export default Theme;
