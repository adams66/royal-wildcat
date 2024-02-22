import Key from '../../../key/key.json';



function HomeGrid(props) {
	return (
		<div className="row m-3 m-md-4 m-lg-5">
			<div className="col-12">
				<h3 className="text-light">Quick Links</h3>
			</div>

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
