import Key from '../../../key/key.json';



function HomeGrid(props) {
	return (
		<div className="row m-2 m-md-3 m-lg-3">
			{Key.homeCards.map((r) => {
				return (
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<div className="card" style={{ height: '100%', backgroundColor: '#101116' }}>
							<div style={{height:"250px"}} className="card-body p-3">
		
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default HomeGrid;
