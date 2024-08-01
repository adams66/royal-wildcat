import Key from '../../../key/key.json';



function HomeGrid(props) {
	return (
		<div className="row m-2 m-md-3 m-lg-3">
			{Key.homeCards.map((r) => {
				return (
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<div className="card splash" style={{ height: '300px' }}>
							<div  className="card-body p-0">
							<a style={{"backgroundColor":"rgb(102, 16, 242)"}} className="btn btn-primary">Click</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default HomeGrid;
