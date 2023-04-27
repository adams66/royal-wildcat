import Key from '../../../key/key.json';
import Button from '../../../layout/components/Button/Button';

function HomeIconGrid(props) {
	return (
		<div className="row m-3 m-md-4 m-lg-5">
			<div className="col-12">
				<h3 className="text-light">Quick Links</h3>
			</div>
			<div className="col-12 col-md-6 col-lg-3 mb-3">
				<div className="card" style={{ backgroundColor: Key.component, height: '100%' }}>
					<div className="card-body p-1" />
				</div>
			</div>
		</div>
	);
}

export default HomeIconGrid;
