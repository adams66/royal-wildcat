import Key from '../../../key/key.json';

import Button from '../../../layout/components/Button/Button';
import { useEffect } from 'react';



function HomeGrid(props) {




	useEffect(() => {


	},[])




	return (

	


		<div className="row m-3 m-md-4 m-lg-5">
            <div className="col-12">
            <h3 className="text-light">Quick Links</h3>

            </div>



{Key.homeCards.map((r) => {
				return (
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<div className="card" style={{backgroundColor: Key.component, height:"100%"}}>
							<div className="card-body p-1">
							   <img style={{height: "250px"}} className="card-img-top" src={r.card} />
	
	
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default HomeGrid;
